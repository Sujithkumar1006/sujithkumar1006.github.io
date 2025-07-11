"use client";

import React, { useState } from "react";
import { StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sheet] = useState(() => {
    const styleSheet =
      typeof window === "undefined"
        ? new (require("styled-components").ServerStyleSheet)()
        : null;
    return styleSheet;
  });

  return (
    <StyleSheetManager sheet={sheet?.instance}>{children}</StyleSheetManager>
  );
}

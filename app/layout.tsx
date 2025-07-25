import { ReactNode } from "react";
import StyledComponentsRegistry from "./lib/registry"; // helper for styled-components SSR
import { GlobalStyle } from "./globalStyles";
import "./globals.css";

export const metadata = {
  title: "Sujith Kumar Thankaraj | Portfolio",
  description: "Full-Stack Software Engineer",
  icons: {
    icon: "./favico.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

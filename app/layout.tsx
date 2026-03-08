import { ReactNode } from "react";
import StyledComponentsRegistry from "./lib/registry"; // helper for styled-components SSR
import { GlobalStyle } from "./globalStyles";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";

const themeInitScript = `
  (function() {
    try {
      var savedTheme = localStorage.getItem("theme") || "dark";
      document.documentElement.setAttribute("data-theme", savedTheme);
    } catch (error) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  })();
`;

export const metadata = {
  title: "Sujith Kumar Thankaraj | Portfolio",
  description: "Full-Stack Software Engineer",
  icons: {
    icon: "./favico.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          data-goatcounter="https://sthankaraj.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyle />
            <ThemeToggle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

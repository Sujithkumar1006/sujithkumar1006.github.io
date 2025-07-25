// app/globalStyles.ts
'use client'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #0d1117;
    --text-color: #ffffff;
    --card-bg: #1e1e1e;
    --card-border: #2c2c2c;
    --button-border: #ffffff;
    --button-hover-bg: #ffffff;
    --button-hover-color: #0d1117;
    --sub-text-color: #b0b0b0;
    --tech-stack-bg: #1e1e1e;
    --tech-stack-border: #2c2c2c;
    --timeline-border: #ffffff;
    --timeline-dot: #ffffff;
  }

  [data-theme="light"] {
    --bg-color: #ffffff;
    --text-color: #0d1117;
    --card-bg: #f6f8fa;
    --card-border: #d0d7de;
    --button-border: #0d1117;
    --button-hover-bg: #0d1117;
    --button-hover-color: #ffffff;
    --sub-text-color: #656d76;
    --tech-stack-bg: #f6f8fa;
    --tech-stack-border: #d0d7de;
    --timeline-border: #0d1117;
    --timeline-dot: #0d1117;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0 24px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    scroll-behavior: smooth;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 768px) {
      padding: 48px 32px;
    }
  
    @media (min-width: 1280px) {
      padding: 64px 48px;
    }
  }

  section {
    padding: 40px 0;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }
  li{
    list-style-type: none;
  }
`

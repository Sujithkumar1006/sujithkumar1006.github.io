// app/globalStyles.ts
'use client'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0 24px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #0D1117;
    color: #fff;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  main {
    max-width: 1440px;
    margin: 0 auto;
    padding-bottom: 48px;
    @media (min-width: 768px) {
      max-width: 1024px;
      padding: 48px 32px;
    }
  
    @media (min-width: 1280px) {
      max-width: 1440px;
      padding: 64px 48px;
    }
  }

  section {
    padding: 40px 0;
  }
  li{
    list-style-type: none;
  }
`

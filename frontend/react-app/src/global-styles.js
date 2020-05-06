import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Alegreya Sans", "Open Sans", sans-serif;
    height: 100vh;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }

  :root {
    font-size: 10px;
  }

  body {
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    height: 100vh;
    overflow: hidden;
    background-color: var(--canvas);
    color: var(--canvas-text);
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: row;
  }

  tt,
  code,
  kbd,
  samp,
  listing {
    font-family: hasklig, Hack, "Fira Code", "Source Code Pro", monaco, menlo,
      consolas, monospace;
    font-variant-ligatures: contextual;
  }
`

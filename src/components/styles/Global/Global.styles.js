import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);
    --theme-element: ${(props) =>
      props.darkmode ? props.theme.dark.element : props.theme.light.element};
    --theme-bg: ${(props) =>
      props.darkmode
        ? props.theme.dark.background
        : props.theme.light.background};
    --theme-text: ${(props) =>
      props.darkmode ? props.theme.dark.text : props.theme.light.text};
    --theme-input: ${(props) =>
      props.darkmode ? props.theme.dark.input : props.theme.light.input};

    --font-family: 'Nunito Sans', sans-serif;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--theme-bg);
    font-family: var(--font-family);
    color: var(--theme-text);
  }

  h1,
  h2,
  h3 {
    margin: 0;
    line-height: normal;
  }

  p {
    margin: 0;
  }

  a:link,
  a:active,
  a:visited {
    text-decoration: none;
  }
`

export default GlobalStyle

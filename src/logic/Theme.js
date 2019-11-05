//#region Theme
const dark = {
  wash: "var(--color-dark-wash)",
  card: "var(--color-dark-card)",
  shadow: "var(--color-dark-shadow)",
  text: "var(--color-dark-text)",
  text_t: "var(--color-dark-text-t)",
  text_tt: "var(--color-dark-text-tt)",
  text_ttt: "var(--color-dark-text-ttt)"
};

const light = {
  wash: "var(--color-wash)",
  card: "var(--color-card)",
  shadow: "var(--color-shadow)",
  text: "var(--color-text)",
  text_t: "var(--color--text-t)",
  text_tt: "var(--color-text-tt)",
  text_ttt: "var(--color-text-ttt)"
};
//#endregion

//#region GlobalStyle
const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: DarkOrange;
    --color-primary-l: orange;
    --color-primary-d: OrangeRed;

    --color-nav: #333;
    --color-wash: #eee;
    --color-card: #fff;
    --color-dark-wash: #222;
    --color-dark-card: #000;
    --color-highlight: PapayaWhip;
    --color-shadow: rgba(0, 0, 0, 0.1);
    --color-dark-shadow: rgba(0, 0, 0, 0.4);

    --color-text: #111;
    --color-text-t: #333;
    --colot-text-tt: #555;
    --color-text-ttt: #777;
    --color-dark-text: #bbb;
    --color-dark-text-t: #999;
    --colot-dark-text-tt: #777;
    --color-dark-text-ttt: #555;

    --font: "Lato", sans-serif;
    background-color: ${props => props.theme.wash};
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    user-select: none;
  }

  h1 {
    color: ${props => props.theme.text};
    margin: 0px 0px 8px 0px;
    font-size: 17pt;
  }


  h2 {
    color: ${props => props.theme.text};
    margin: 0px 0px 4px 0px;
    font-size: 15pt;
  }

  body, p {
    width: 100%;
    height: 100%;
    font-family: var(--font);
    color: ${props => props.theme.text_t};
    font-size: 13pt;
    &.no-scroll{
      overflow: hidden;
    }
  }
`
//#endregion

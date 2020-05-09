import { createGlobalStyle } from "styled-components";
import { Color } from "./lib/theme";
import './assets/fonts/stylesheet.css';
function fontFace(name, src, fontWeight = "normal", fontStyle = "normal") {
    return `
    @font-face{
        font-family: "${name}";
        src: url(${require("./assets/fonts/" + src + ".eot")});
        src: url(${require("./assets/fonts/" +
            src +
            ".eot")}?#iefix) format("embedded-opentype"),
             url(${require("./assets/fonts/" + src + ".woff")}) format("woff"),
             url(${require("./assets/fonts/" +
                 src +
                 ".ttf")}) format("truetype"),

        font-style: ${fontStyle};
        font-weight: ${fontWeight};
    }
`;
}
// ${fontFace("Futura", "FuturaPT-Light", 100, "normal")}
// ${fontFace("Futura", "FuturaPT-Book", 300, "normal")}
// ${fontFace("Futura", "FuturaPT-Book", "normal", "normal")}
// ${fontFace("Futura", "FuturaPT-Bold", 600, "normal")}
// ${fontFace("Futura", "futura_pt_book", "normal", "normal")}
export const GlobalStyles = createGlobalStyle`
// ${fontFace("Futura", "FuturaPT-Light", 100, "normal")}
  body {
    font-family: "Futura PT", "Helvetica", "Open Sans", sans-serif;
    height: 100vh;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    color: ${Color.black}
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  :root {
    // font-size: 10px;
  }
  * {
    box-sizing: border-box;
  }
  body {
  }

  #root {
  }

  tt,
  code,
  kbd,
  samp,
  listing {
  }
`;

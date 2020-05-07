import { createGlobalStyle } from "styled-components";
import { Color } from "./lib/theme";
function fontFace(name, src, fontWeight = "normal", fontStyle = "normal") {
    return `
    @font-face{
        font-family: "${name}";
        src: url(${require("./library/fonts/" + src + ".eot")});
        src: url(${require("./library/fonts/" +
            src +
            ".eot")}?#iefix) format("embedded-opentype"),
             url(${require("./library/fonts/" + src + ".woff")}) format("woff"),
             url(${require("./library/fonts/" +
                 src +
                 ".ttf")}) format("truetype"),

        font-style: ${fontStyle};
        font-weight: ${fontWeight};
    }
`;
}
export const GlobalStyles = createGlobalStyle`
  ${fontFace("FuturaPt", "FuturaPT-Light", 100, "normal")}
  ${fontFace("FuturaPt", "FuturaPT-Book", 300, "normal")}
  ${fontFace("FuturaPt", "FuturaPT-Medium", "normal", "normal")}
  ${fontFace("FuturaPt", "FuturaPT-Bold", 600, "normal")}
  body {
    font-family: "Helvetica", "FuturaPt", "Open Sans", sans-serif;
    height: 100vh;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    color: ${Color.black}
  }

  :root {
    // font-size: 10px;
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

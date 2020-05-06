import * as React from "react";
import { hot } from "react-hot-loader";
import { Normalize } from "styled-normalize";

import { Routes } from "./routes";
import { GlobalStyles } from "./global-styles";

export const config = {
    base: "14px",
    lineHeight: 1.4,
    ratio: "28px at 6",
    tablet: {
        breakpoint: "768px",
    },
    desktop: {
        breakpoint: "992px",
    },
};

export const App = hot(module)(() => (
    <>
        <Normalize />
        <GlobalStyles />
        <Routes />
    </>
));

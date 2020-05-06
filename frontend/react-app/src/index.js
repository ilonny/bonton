import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";

import { history } from "./lib";
import { App } from "./app";

const root = document.querySelector("#root");

const render = () => {
    if (root) {
        ReactDOM.render(
            <Router history={history}>
                <App />
            </Router>,
            root
        );
    }
};

if (module.hot) {
    module.hot.accept("./app", render);
}

render();

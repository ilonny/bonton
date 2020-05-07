import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { Provider } from "react-redux";

import { history } from "./lib";
import { App } from "./app";
import { store } from "./lib";
const root = document.querySelector("#root");
const render = () => {
    if (root) {
        ReactDOM.render(
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>,
            root
        );
    }
};

if (module.hot) {
    module.hot.accept("./app", render);
}

render();

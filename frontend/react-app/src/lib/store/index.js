import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const mainReducer = (state = {test: 123}, action) => {
    return { ...state };
};

const rootReducer = combineReducers({
    main: mainReducer,
});

let enhacers;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    enhacers = applyMiddleware(thunk, createLogger({ collapsed: true }));
} else {
    enhacers = applyMiddleware(thunk);
}

function configureStore() {
    const store = createStore(rootReducer, undefined, enhacers);
    return store ;
}

export const store = configureStore();
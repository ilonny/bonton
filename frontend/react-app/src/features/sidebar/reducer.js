import { SET_SIDEBAR_IS_OPEN } from "./actions";
export const sideBarReducer = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case SET_SIDEBAR_IS_OPEN:
            return { ...state, isOpen: action.payload };
        default:
            return state;
    }
};

sideBarReducer.onSetSiderBarIsOpen = (params) => (dispatch) =>
    dispatch({ type: SET_SIDEBAR_IS_OPEN, params });

import { SET_SIDEBAR_IS_OPEN } from "./actions";
export const sideBarReducer = (state = { isOpen: true }, action) => {
    switch (action.type) {
        case SET_SIDEBAR_IS_OPEN:
            return {
                ...state,
                isOpen: action.payload ? action.payload : !state.isOpen,
            };
        default:
            return state;
    }
};

sideBarReducer.toggleSideBar = (params) => (dispatch) => {
    dispatch({ type: SET_SIDEBAR_IS_OPEN, params });
};

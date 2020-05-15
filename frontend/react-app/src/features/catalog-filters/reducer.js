import { SET_CATEGORIES } from "./actions";
const initialState = {
    categories: [],
};
export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.params,
            };
        default:
            return state;
    }
};

categoriesReducer.setCategories = (params) => (dispatch) => {
    dispatch({ type: SET_CATEGORIES, params });
};

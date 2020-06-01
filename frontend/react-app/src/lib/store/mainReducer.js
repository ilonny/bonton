import { request } from "../rest";
import { SET_MENU_CATEGORIES } from "./actions";
const initialState = {
    menuCategories: {},
}
export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MENU_CATEGORIES: {
            return { ...state, menuCategories: action.categories }
        }
        default: {
            return { ...state };
        }
    }
};

mainReducer.getMenuCategories = (dispatch) => request({
    method: 'GET',
    url: 'get-categories',
}).then((response) => {
    dispatch({ type: SET_MENU_CATEGORIES, categories: response })
})
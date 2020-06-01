import { connect } from "react-redux";
import { SideBarTemplate } from "./templates";
import { sideBarReducer } from "./reducer";
import { mainReducer } from "../../features";
export const SideBar = connect(
    (state) => ({
        ...state.sidebar,
        menu: state.main.menuCategories.tree
    }),
    (dispatch) => ({
        toggleSideBar: (params) => dispatch(sideBarReducer.toggleSideBar(params)),
        getMenuCategories: () => dispatch(mainReducer.getMenuCategories),
    })
)(SideBarTemplate);

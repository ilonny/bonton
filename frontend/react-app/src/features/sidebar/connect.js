import { connect } from "react-redux";
import { SideBarTemplate } from "./templates";
import { sideBarReducer } from "./reducer";
export const SideBar = connect(
    (state) => state.sidebar,
    (dispatch) => ({
        toggleSideBar: (params) => dispatch(sideBarReducer.toggleSideBar(params)),
    })
)(SideBarTemplate);

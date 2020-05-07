import { connect } from "react-redux";
import { HeaderTemplate } from "./templates";
import { sideBarReducer } from "../sidebar";
export const Header = connect(
    (state) => state.sidebar,
    (dispatch) => ({
        toggleSideBar: (params) => dispatch(sideBarReducer.toggleSideBar(params)),
    })
)(HeaderTemplate);

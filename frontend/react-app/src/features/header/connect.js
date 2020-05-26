import { connect } from "react-redux";
import { HeaderTemplate } from "./templates";
import { sideBarReducer } from "../sidebar";
// import {cartReducer} from "../cart";
export const Header = connect(
    (state) => ({
        sidebar: state.sidebar,
        cart: state.cart
    }),
    (dispatch) => ({
        toggleSideBar: (params) => dispatch(sideBarReducer.toggleSideBar(params)),
    })
)(HeaderTemplate);

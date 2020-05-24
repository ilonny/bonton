import { connect } from "react-redux";
import { ProductTemplate } from "./templates";
// import { productReducer } from "./reducer";
export const Product = connect(
    (state) => state.product,
    (dispatch) => ({
        test: () => {},
        // toggleSideBar: (params) => dispatch(sideBarReducer.toggleSideBar(params)),
    })
)(ProductTemplate);

import { connect } from "react-redux";
import { CartTemplate } from "./templates";
import { cartReducer } from "./reducer";
export const Product = connect(
    (state) => ({
        product: state.product
    }),
    (dispatch) => ({
        getCurrentProduct: id => dispatch(cartReducer.getProducts(id)),
    })
)(CartTemplate);

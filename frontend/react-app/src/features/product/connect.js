import { connect } from "react-redux";
import { ProductTemplate } from "./templates";
import { productReducer } from "./reducer";
import { cartReducer } from "../cart";
export const Product = connect(
    (state) => ({
        product: state.product,
        cart: state.cart,
    }),
    (dispatch) => ({
        getCurrentProduct: id => dispatch(productReducer.getProducts(id)),
        addToCart: (product_id, price) => dispatch(cartReducer.addToCart(product_id, price)),
        removeFromCart: product_id => dispatch(cartReducer.removeFromCart(product_id)),
    })
)(ProductTemplate);

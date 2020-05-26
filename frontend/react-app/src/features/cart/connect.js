import { connect } from "react-redux";
import { CartTemplate } from "./templates";
import { cartReducer } from "./reducer";
import { productReducer} from "../product";
export const Cart = connect(
    (state) => ({
        cart: state.cart,
        products: state.product.products,
    }),
    (dispatch) => ({
        getCurrentProduct: id => dispatch(productReducer.getProducts(id)),
        addToCart: product_id => dispatch(cartReducer.addToCart(product_id)),
        removeFromCart: product_id => dispatch(cartReducer.removeFromCart(product_id)),
    })
)(CartTemplate);

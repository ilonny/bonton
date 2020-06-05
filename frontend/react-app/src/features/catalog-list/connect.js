import { connect } from "react-redux";
import { CatalogListTemplate } from "./templates";
import { productReducer } from "../product";
import { cartReducer } from "../cart";
export const CatalogList = connect(
    (state) => ({
        data: state.product.products,
        cart_products: state.cart.products,
        menuCategories: state.main.menuCategories.tree
    }),
    (dispatch) => ({
        getProducts: (id, _isPopular) => dispatch(productReducer.getProducts(id, _isPopular)),
        addToCart: (product_id, price) => dispatch(cartReducer.addToCart(product_id, price)),
        removeFromCart: product_id => dispatch(cartReducer.removeFromCart(product_id)),
    })
)(CatalogListTemplate);

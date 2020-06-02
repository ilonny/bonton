import { connect } from "react-redux";
import { CatalogTypeSelectTemplate } from "./templates"
import { categoriesReducer } from "../../features";
export const CatalogTypeSelect = connect(
    (state) => ({
        type: state.categories.type
    }),
    (dispatch) => ({
        setTypeStore: type => dispatch(categoriesReducer.setType(type))
    })
)(CatalogTypeSelectTemplate);
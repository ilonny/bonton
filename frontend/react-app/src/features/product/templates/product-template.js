import React, { useEffect } from "react";
import { Row } from "../../styled-components-layout";
import { ProductGallery, ProductInfo } from "../organisms";
export const ProductTemplate = props => {
    // console.log('ProductTemplate', props);
    const { id, getCurrentProduct } = props;
    useEffect(() => {
        getCurrentProduct(id);
    }, [id, getCurrentProduct])
    return (
        <Row justify="flex-start" align="flex-start" tablet_wrap="true">
            <ProductGallery data={props.product.currentProduct} />
            <ProductInfo data={props.product.currentProduct} {...props}/>
        </Row>
    )
}
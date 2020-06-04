import React, { useEffect } from "react";
import { Row } from "../../styled-components-layout";
import { ProductGallery, ProductInfo } from "../organisms";
export const ProductTemplate = props => {
    // console.log('ProductTemplate', props);
    const { id, getCurrentProduct, product } = props;
    const { currentProduct } = product;
    useEffect(() => {
        getCurrentProduct(id);
    }, [id, getCurrentProduct]);
    if (currentProduct) {
        return (
            <Row justify="flex-start" align="flex-start" tablet_wrap="true">
                <ProductGallery data={currentProduct} />
                <ProductInfo data={currentProduct} {...props} />
            </Row>
        )
    }
    return null;
}
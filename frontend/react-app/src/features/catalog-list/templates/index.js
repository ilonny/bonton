import React, { useEffect } from "react";
import { Row } from "../../styled-components-layout";
import { Block } from "../organisms/block";
import { CategoryTitle } from "../../common";
export const CatalogListTemplate = (props) => {
    console.log('catalog list props', props)
    const { getProducts, isPopular } = props;
    useEffect(() => {
        getProducts(null, isPopular);
    }, [getProducts, isPopular]);
    if (props.data) {
        return (
            <>
                {isPopular && <CategoryTitle>Популярное</CategoryTitle>}
                <div style={{ margin: '-10px' }}>
                    <Row align="flex-start" wrap="wrap">
                        {props.data.map((item) => (
                            <Block item={item} key={item.id} {...props} />
                        ))}
                    </Row>
                </div>
            </>
        )
    }
    return null;
}
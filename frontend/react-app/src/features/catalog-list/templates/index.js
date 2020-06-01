import React, {useEffect} from "react";
import { Row } from "../../styled-components-layout";
import { Block } from "../organisms/block";
export const CatalogListTemplate = (props) => {
    // console.log('catalog list props', props)
    const {getProducts} = props;
    useEffect(() => {
        getProducts();
    }, [getProducts]);
    return (
        <div style={{ margin: '-10px' }}>
            <Row align="flex-start" wrap="wrap">
                {props.data.map((item) => (
                    <Block item={item} key={item.id} {...props} />
                ))}
            </Row>
        </div>
    )
}
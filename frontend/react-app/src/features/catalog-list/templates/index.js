import React from "react";
import { Row } from "../../styled-components-layout";
import { Block } from "../organisms/block";
export const CatalogList = (props) => (
    <div style={{margin: '-10px'}}>
        <Row align="flex-start" wrap="wrap">
            {props.data.map((item) => (
                <Block item={item} key={item.id} />
            ))}
        </Row>
    </div>
);

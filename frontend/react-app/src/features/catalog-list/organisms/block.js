import React from "react";
import {Link} from "react-router-dom";
// import styled from "styled-components";
import {
    BlockWrapper,
    ImageWrapper,
    Image,
    Title,
    CartButton,
    Price,
} from "../atoms";
import { Row } from "../../styled-components-layout";
export const Block = ({ item }) => (
    <BlockWrapper>
        <Link to={`/product/${item.id}`}>
            <ImageWrapper>
                <img
                    src={item.image_hover}
                    style={{ opacity: 0, maxWidth: "100%" }}
                    alt={item.title}
                />
                <Image src={item.image_hover} />
                <Image hover_hide="true" src={item.image} />
            </ImageWrapper>
            <Title>{item.title}</Title>
        </Link>
        <div>
            <Row align="center" mobile_wrap="true">
                <CartButton active={false} />
                <Price>{item.price}</Price>
            </Row>
        </div>
    </BlockWrapper>
);

import React from "react";
import { Title } from "../atoms";
import { ReactComponent as SvgArrow } from "../../../assets/icons/arrow_down_red.svg";
import { Row } from "../../styled-components-layout";

export const Type = (props) => (
    <Row align="center" justify="space-between" style={{cursor: 'pointer'}}>
        <Title {...props} >{props.text}</Title>
        {props.svg && <SvgArrow fill="#fff" />}
    </Row>
);

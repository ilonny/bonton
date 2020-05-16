import React, { useState } from "react";
import { Row } from "../../styled-components-layout";
import {
    FilterSelectTitle,
    FilterSelectWrapper,
    FilterSelectItem,
} from "../atoms";
import { ReactComponent as SvgArrow } from "../../../assets/icons/arrow_down_red.svg";
import { Icon } from "../../common";
export const FilterSelect = (props) => {
    const { toggleCategory } = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <FilterSelectWrapper active={isOpen}>
            <Row
                align="center"
                justify="space-between"
                onClick={() => setIsOpen(!isOpen)}
                className="titleWrapper"
            >
                <FilterSelectTitle>{props.title}</FilterSelectTitle>
                <SvgArrow />
            </Row>
            {isOpen && (
                <div className="filter-select-content">
                    {props.data &&
                        props.data.map((item) => (
                            <FilterSelectItem
                                active={item.active}
                                key={item.name}
                                onClick={() => toggleCategory(item)}
                            >
                                {item.name}
                                {item.active && (
                                    <Icon name="close_red" type="simple" />
                                )}
                            </FilterSelectItem>
                        ))}
                </div>
            )}
        </FilterSelectWrapper>
    );
};

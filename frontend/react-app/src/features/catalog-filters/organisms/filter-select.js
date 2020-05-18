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
    const { toggleCategory, type } = props;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <FilterSelectWrapper active={isOpen} type={type}>
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
                        type === "categories" &&
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
                    {props.data &&
                        type === "filters" &&
                        props.data.map((filter) => (
                            <div className="filter-item" key={filter.name}>
                                <span className="filter-item__name">
                                    {filter.name}
                                </span>
                                {filter.items.map((item) => (
                                    <FilterSelectItem
                                        active={item.active}
                                        key={item.name}
                                        onClick={() => toggleCategory(item)}
                                    >
                                        {item.name}
                                        {item.active && (
                                            <Icon
                                                name="close_red"
                                                type="simple"
                                            />
                                        )}
                                    </FilterSelectItem>
                                ))}
                            </div>
                        ))}
                </div>
            )}
        </FilterSelectWrapper>
    );
};

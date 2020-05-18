import React, { useState, Fragment } from "react";
import { Row } from "../../styled-components-layout";
import {
    FilterSelectTitle,
    FilterSelectWrapper,
    FilterSelectItem,
    FilterSelectPrice
} from "../atoms";
import { ReactComponent as SvgArrow } from "../../../assets/icons/arrow_down_red.svg";
import { Icon } from "../../common";
export const FilterSelect = (props) => {
    const { toggleCategory, type, toggleFilter } = props;
    const [isOpen, setIsOpen] = useState(true);
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
                            <Fragment key={filter.name}>
                                {filter.code !== "price" ? (
                                    <div className="filter-item">
                                        <span className="filter-item__name">
                                            {filter.name}
                                        </span>
                                        {filter.items.map((item) => (
                                            <FilterSelectItem
                                                active={item.active}
                                                key={item.name}
                                                onClick={() =>
                                                    toggleFilter({
                                                        ...item,
                                                        parent_code:
                                                            filter.code,
                                                    })
                                                }
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
                                ) : (
                                    <div
                                        className="filter-item"
                                        key={filter.name}
                                    >
                                        <span className="filter-item__name">
                                            {filter.name}
                                        </span>
                                        <FilterSelectPrice>
                                            <span>от</span>
                                            <input onInput={(e) => console.log(e.target.value)} />
                                            <span>до</span>
                                            <input />
                                        </FilterSelectPrice>
                                    </div>
                                )}
                            </Fragment>
                        ))}
                </div>
            )}
        </FilterSelectWrapper>
    );
};

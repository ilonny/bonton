import React, { useState, Fragment, useRef } from "react";
import { Row } from "../../styled-components-layout";
import {
    FilterSelectTitle,
    FilterSelectWrapper,
    FilterSelectItem,
    FilterSelectPrice,
} from "../atoms";
import { useOutsideAlerter } from "../lib";
import { ReactComponent as SvgArrow } from "../../../assets/icons/arrow_down_red.svg";
import { Icon } from "../../common";
export const FilterSelect = (props) => {
    const { toggleCategory, type, toggleFilter } = props;
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => setIsOpen(false));
    return (
        <FilterSelectWrapper active={isOpen} type={type} ref={wrapperRef}>
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
                                                <input
                                                    onChange={(e) =>
                                                        toggleFilter({
                                                            parent_code: 'price_min',
                                                            value: e.target.value,
                                                        })
                                                    }
                                                    value={filter.items[0].name}
                                                />
                                                <span>до</span>
                                                <input
                                                    onChange={(e) =>
                                                        toggleFilter({
                                                            parent_code: 'price_max',
                                                            value: e.target.value,

                                                        })
                                                    }
                                                    value={filter.items[1].name}
                                                />
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

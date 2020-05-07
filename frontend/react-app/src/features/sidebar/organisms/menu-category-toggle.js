import React from 'react';
// import styled from "styled-components";
import {MenuCategory} from "../molecules/menu-category";

import SlideToggle from "react-slide-toggle";

export const MenuCategoryToggle = (props) => (
    <SlideToggle
    render={({ toggle, setCollapsibleElement }) => (
        <>
        <MenuCategory onClick={toggle} {...props} />
        <div className="my-collapsible__content" ref={setCollapsibleElement}>
            <div className="my-collapsible__content-inner">Collapsible content</div>
        </div>
        </>
    )}
    />
)
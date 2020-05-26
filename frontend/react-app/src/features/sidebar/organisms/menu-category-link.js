import React from "react";
import { MenuCategory } from "../molecules/menu-category";
import { Link } from "react-router-dom";
export const MenuCategoryLink = (props) => {
    const { href, toggleSideBar } = props;
    return (
        <Link to={href ? href : ''} onClick={() => toggleSideBar()}>
            <MenuCategory {...props} simple={true} />
        </Link>
    );
};

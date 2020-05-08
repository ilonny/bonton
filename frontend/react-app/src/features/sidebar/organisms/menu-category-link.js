import React from "react";
import { MenuCategory } from "../molecules/menu-category";

export const MenuCategoryLink = (props) => {
    return (
        <a href="/">
            <MenuCategory {...props} simple={true} />
        </a>
    );
};

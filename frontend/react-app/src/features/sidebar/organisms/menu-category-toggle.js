import React, { useState } from "react";
// import styled from "styled-components";
import { MenuCategory } from "../molecules/menu-category";

import SlideToggle from "react-slide-toggle";

export const MenuCategoryToggle = (props) => {
    const [opened, setOpened] = useState(false);
    return (
        <SlideToggle
            collapsed
            render={({ toggle, setCollapsibleElement }) => (
                <>
                    <div
                        onClick={() => {
                            setOpened(!opened);
                            toggle();
                        }}
                    >
                        <MenuCategory {...props} opened={opened} />
                    </div>
                    <div
                        className="my-collapsible__content"
                        ref={setCollapsibleElement}
                    >
                        {props.children}
                    </div>
                </>
            )}
        />
    );
};

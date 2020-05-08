import React from "react";
import styled from "styled-components";
import { MenuHeader } from "../molecules/menu-header";
import { MenuCategoryToggle } from "../organisms/menu-category-toggle";
export const SideBarTemplate = (props) => {
    const { toggleSideBar } = props;
    return (
        <SideBarContainer {...props}>
            <MenuHeader action={toggleSideBar} />
            <MenuCategoryToggle type="first" text="Мужское">
                <MenuCategoryToggle type="second" text="Верхняя одежда">
                    <p>content Верхняя одежда</p>
                </MenuCategoryToggle>
                <MenuCategoryToggle type="second" text="Футболки">
                    <p>content Футболки</p>
                </MenuCategoryToggle>
                <MenuCategoryToggle type="second" text="Аксессуары">
                    <p>content Аксессуары</p>
                </MenuCategoryToggle>
            </MenuCategoryToggle>
            <MenuCategoryToggle type="first" text="Женское">
                <p>Женский контент</p>
            </MenuCategoryToggle>
        </SideBarContainer>
    );
};

const SideBarContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 600px;
    background: #fff;
    transition: all 250ms ease;
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100")}%);
    box-shadow: 10px 0px 10px 1px rgba(0, 0, 0, 0.2);
`;

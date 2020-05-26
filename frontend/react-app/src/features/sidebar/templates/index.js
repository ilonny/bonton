import React from "react";
import styled from "styled-components";
import { MenuHeader, MenuBottom } from "../molecules";
import { MenuCategoryToggle, MenuCategoryLink } from "../organisms";
export const SideBarTemplate = (props) => {
    const { toggleSideBar } = props;
    return (
        <SideBarContainer {...props}>
            <MenuHeader action={toggleSideBar} />
            <MenuCategoryToggle type="first" text="Мужское">
                <MenuCategoryToggle type="second" text="Верхняя одежда">
                    <MenuCategoryLink type="third" text="Куртки" href="/catalog" toggleSideBar={toggleSideBar} />
                    <MenuCategoryLink type="third" text="Брюки" href="/catalog" toggleSideBar={toggleSideBar} />
                    <MenuCategoryLink type="third" text="Джинсы" href="/catalog" toggleSideBar={toggleSideBar} />
                </MenuCategoryToggle>
                <MenuCategoryLink type="second" text="Футболки" href="/catalog" toggleSideBar={toggleSideBar}  />
                <MenuCategoryToggle type="second" text="Аксессуары">
                    <MenuCategoryLink type="third" text="Часы" href="/catalog" toggleSideBar={toggleSideBar}  />
                    <MenuCategoryLink type="third" text="Сумки" href="/catalog" toggleSideBar={toggleSideBar}  />
                    <MenuCategoryLink type="third" text="Ремни"  href="/catalog" toggleSideBar={toggleSideBar} />
                </MenuCategoryToggle>
            </MenuCategoryToggle>
            <MenuCategoryToggle type="first" text="Женское">
                <MenuCategoryToggle type="second" text="Верхняя одежда">
                    <MenuCategoryLink type="third" text="Куртки" href="/catalog" toggleSideBar={toggleSideBar}  />
                    <MenuCategoryLink type="third" text="Брюки" href="/catalog" toggleSideBar={toggleSideBar}  />
                    <MenuCategoryLink type="third" text="Джинсы" href="/catalog" toggleSideBar={toggleSideBar}  />
                </MenuCategoryToggle>
                <MenuCategoryLink type="second" text="Футболки" href="/catalog" toggleSideBar={toggleSideBar}  />
                <MenuCategoryToggle type="second" text="Аксессуары">
                    <MenuCategoryLink type="third" text="Часы" href="/catalog" toggleSideBar={toggleSideBar}  />
                    <MenuCategoryLink type="third" text="Сумки" href="/catalog" toggleSideBar={toggleSideBar}  />
                    <MenuCategoryLink type="third" text="Ремни" href="/catalog" toggleSideBar={toggleSideBar}  />
                </MenuCategoryToggle>
            </MenuCategoryToggle>
            <MenuCategoryLink type="first" text="Доставка" href="/delivery" toggleSideBar={toggleSideBar} />
            <MenuCategoryLink type="first" text="Возврат" href="/delivery" toggleSideBar={toggleSideBar} />
            <MenuCategoryLink type="first" text="Контакты" href="/contacts" toggleSideBar={toggleSideBar} />
            <MenuBottom />
        </SideBarContainer>
    );
};

const SideBarContainer = styled.div`
    position: fixed;
    z-index: 11;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
    width: 100%;
    max-width: 600px;
    background: #fff;
    transition: all 250ms ease;
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100")}%);
    box-shadow: 10px 0px 10px 1px rgba(0, 0, 0, 0.2);
`;

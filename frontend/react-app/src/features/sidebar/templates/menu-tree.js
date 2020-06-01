import React from "react";
import { MenuCategoryToggle, MenuCategoryLink } from "../organisms";

const types = { 0: 'first', 1: 'second', 2: 'third' };

export const MenuTree = props => {
    const hasChildren = member => !!member.children
    const level = props.level || 0;
    return (
        <div level={level}>
            {props.menu.map((member, i) => {
                return (
                    <div key={i}>
                        {hasChildren(member) ? (
                            <MenuCategoryToggle type={types[level]} text={member.name}>
                                {hasChildren(member) && <MenuTree level={level + 1} menu={member.children} toggleSideBar={props.toggleSideBar} />}
                            </MenuCategoryToggle>
                        ) : (
                                <MenuCategoryLink type={types[level]} text={member.name} href={`/catalog?categories=${member.id}`} toggleSideBar={props.toggleSideBar} />
                            )}
                    </div>
                )
            })}
        </div>
    )
}
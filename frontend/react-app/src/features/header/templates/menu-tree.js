import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuTree = props => {
    const hasChildren = member => !!member.children
    // const level = props.level || 0;
    return (
        <MenuWrapper {...props}>
            {props.menu.map((member, i) => {
                // if (member.id !== 1 && member.id !== 2) {
                return (
                    <div key={i} >
                        {hasChildren(member) ? (
                            <>
                                <div className="bold">
                                    <Link to={`/catalog?categories=${member.id}`}>
                                        <Item>{member.name}</Item>
                                    </Link>
                                </div>
                                {hasChildren(member) && <MenuTree menu={member.children} wrap={true} />}
                            </>
                        ) : (
                                <div>
                                    <Link to={`/catalog?categories=${member.id}`}>
                                        <Item>{member.name}</Item>
                                    </Link>
                                </div>
                            )}
                    </div>
                )
                // }
                // return null;
            })}
        </MenuWrapper>
    )
}

const Item = styled.div`
    flex: 1 1 210px;
    padding: 10px;
    white-space: nowrap;
    min-width: 145px;
    &:hover {
        text-decoration: underline;
    }
`

const MenuWrapper = styled.div`
    display: flex;
    flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
    & ul {
        padding-left: 10px;
    }
    & .bold {
        // font-weight: bold;
    }
`

// const Row = styled.div`
//     display: flex;
// `

// const Col = styled.div``
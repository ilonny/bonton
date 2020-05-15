import React, { useState } from "react";
import { Wrapper } from "../atoms";
import { Type } from "../organisms";
import { useHistory } from "react-router-dom";
import {Spacer} from "../../common"
export const CatalogTypeSelect = (props) => {
    const types = [
        {
            title: "Мужская одежда",
            href: "/catalog?type=man",
        },
        {
            title: "Женская одежда",
            href: "/catalog?type=women",
        },
    ];
    const [activeType, setActiveType] = useState(types[0]);
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const onClickHandler = (type) => {
        if (isOpen) {
            setIsOpen(false);
            console.log('href', type)
            if (type) {
                setActiveType(type);
                history.push(type.href);
            }
        } else {
            console.log("click");
            setIsOpen(true);
        }
    };
    const otherTypes = types.filter((t) => t.title !== activeType.title);
    return (
        <div style={{position: 'relative'}}>
            <Spacer className="spacer"/>
            <Wrapper active={isOpen}>
                {isOpen ? (
                    <>
                        <div
                            onClick={() => {
                                onClickHandler();
                            }}
                        >
                            <Type
                                text={activeType.title}
                                active={true}
                                svg={true}
                                isOpen={isOpen}
                            />
                        </div>
                        {otherTypes.map((t) => (
                            <div
                                onClick={() => {
                                    onClickHandler(t);
                                }}
                                key={t.title}
                            >
                                <Type
                                    text={t.title}
                                    active={false}
                                    isOpen={isOpen}
                                />
                            </div>
                        ))}
                    </>
                ) : (
                    <div
                        onClick={() => {
                            onClickHandler();
                        }}
                    >
                        <Type
                            text={activeType.title}
                            active={true}
                            svg={true}
                            isOpen={isOpen}
                        />
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

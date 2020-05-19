import React from "react";
import { SortingWrapper, SortingTitle } from "../atoms";
import { ReactComponent as SvgIcon } from "../../../assets/icons/sort_up.svg";
export const Sorting = (props) => {
    const { code, value, setSorting } = props;
    return (
        <SortingWrapper onClick={() => setSorting({code})}>
            <SortingTitle>
                {props.title} {value}
            </SortingTitle>
            <SvgIcon />
        </SortingWrapper>
    );
};

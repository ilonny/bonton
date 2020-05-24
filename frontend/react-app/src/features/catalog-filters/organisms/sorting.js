import React from "react";
import { SortingWrapper, SortingTitle } from "../atoms";
import { ReactComponent as SvgIcon } from "../../../assets/icons/sort_up.svg";
export const Sorting = (props) => {
    const { code, value, setSorting } = props;
    // console.log('Sorting', props);
    return (
        <SortingWrapper onClick={() => setSorting({code})} value={value}>
            <SortingTitle>
                {props.title}{/*value*/}
            </SortingTitle>
            {/* eslint-disable-next-line */}
            {value != 0 && <SvgIcon />}
        </SortingWrapper>
    );
};

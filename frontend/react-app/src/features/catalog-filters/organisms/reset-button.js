import React from "react";
import { ResetFiltersButton } from "../atoms"
export const ResetButton = props => {
    return (
        <>
            <ResetFiltersButton onClick={props.reset}>Сбросить</ResetFiltersButton>
        </>
    )
}
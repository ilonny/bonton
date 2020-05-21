import styled from "styled-components";
import { Color } from "../../../lib"

export const ResetFiltersButton = styled.button`
    padding: 5px;
    color: ${Color.red};
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`
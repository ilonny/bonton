import styled from 'styled-components';
import {Color} from "../../../lib";
export const PaginationButton = styled.button`
    font-size: 18px;
    color: ${props => props.active ? Color.red : Color.black};
    font-weight: ${props => props.active ? '500': '400'};
    font-weight: ${props => props.active ? '500': '400'};
    cursor: ${props => props.clickable ? 'pointer' : 'default'};
    margin: 0 10px;
    padding: 5px;
`
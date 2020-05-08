import styled from "styled-components";

export const GrayText = styled.div`
    color: #C4C4C4;
    & > a, & > p {
        color: #C4C4C4;
        margin: 3px 0;
        display: block;
    }
    a {
        text-decoration: underline;
        cursor-pointer;
    }
    a:hover {
        text-decoration: none;
    }
`
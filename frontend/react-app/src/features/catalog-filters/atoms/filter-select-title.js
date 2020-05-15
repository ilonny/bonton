import styled from "styled-components";

export const FilterSelectTitle = styled.span`
    font-size: 20px;
    color: ${(props) => (props.active ? "#fff" : "#717171")};
    font-weight: 500;
`;

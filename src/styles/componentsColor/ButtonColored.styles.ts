import styled from "styled-components";

export const ButtonColored = styled.button`
    background-color: ${(props) => props.theme.button};
    color: ${(props) => props.theme.font};
`;

import styled from "styled-components";

export const DivPColored = styled.body`
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.font};
`;

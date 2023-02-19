import styled from "styled-components";

export const InputColored = styled.input`
    background-color: ${(props) => props.theme.secundary};
    color: ${(props) => props.theme.font};
`;

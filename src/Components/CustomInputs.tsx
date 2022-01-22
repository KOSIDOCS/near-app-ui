import styled, { StyledFunction } from "styled-components";

interface InputProps {
  invalid?: boolean,
  isActive?: boolean,
}


export const InputMain = styled.input<InputProps>`
    background-color: #FCFCFC;
    padding: .8em 1.3em;
    width: 100%;
    border: 1px solid #BEBEC2;
    border-radius: 10px;
    color: '#BEBEC2';
    outline: none !important;

    &:focus {
       border: 2px solid #885FFF;
       outline: none !important;
    }
`
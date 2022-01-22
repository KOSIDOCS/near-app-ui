import styled from 'styled-components';

const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457"
    }
  };

  type Props = {
    theme?: string;
    active?: boolean;
  }
  
  const Button = styled.button<Props>`
    background: transparent;
    border: none;
    margin: 1.4em .6em;
    padding: 0.25em 1em;
    color: black;
    padding: 5px 15px;
    outline: none;
    text-transform: capitalize;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }

    & i {
        font-size: 18px;
    }
  `;
  
  Button.defaultProps = {
    theme: "blue"
  };
  
  const ButtonToggle = styled(Button)`
    opacity: 0.7;
    ${({ active }: Props) =>
      active &&
      `
      opacity: 1;
      border-radius: 10px;
      border: 1px solid #BEBEC2; 
    `}
  `;

  const ButtonContinue = styled(Button)`
    display: relative;
    margin: 30px auto;
    background-color: #BEBEC2;
    color: white;
    border-radius: 10px;
    border: 1px solid #BEBEC2;
    width: 126px;
    height: 40px;
    padding: 0px, 10px, 0px, 20px;

    ${({ active }: Props) =>
      active &&
      `
        background-color: #885FFF; 
    `}
  `;

  const ButtonLogin = styled(ButtonContinue)`
  background-color: #414047;
  width: 190px;
  font-size: 16px;
  font-weight: 600;
  margin: 0 auto;
  `;

const ButtonLink = styled.a`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
width: 100%;
background: transparent;
color: #587BE0;
border: none;
outline: none;
text-decoration: none;
font-size: 14px;
margin: 0.3rem auto;
`;
  
  const Tab = styled.button`
    padding: 10px 30px;
    cursor: pointer;
    opacity: 0.6;
    background: white;
    border: 0;
    outline: 0;
    border-bottom: 2px solid transparent;
    transition: ease border-bottom 250ms;
    ${({ active }: Props) =>
      active &&
      `
      border-bottom: 2px solid black;
      opacity: 1;
    `}
  `;

  export { ButtonToggle, Button, ButtonContinue, ButtonLogin, ButtonLink };
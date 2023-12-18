import styled from "styled-components";

import { SpinnerContainer } from '../spinner/Spinner.styles';

export const BaseButton = styled.button`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  text-transform: uppercase;
  font-size: .9em;
  font-weight: bold;
  letter-spacing: .1em;
  padding: 1em 2em;
  border: 1px solid var(--primary-color);
  cursor: pointer;
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
  }
`

export const GoogleButton = styled(BaseButton)`
  background-color: #4285f4;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);

  &:hover{
    background-color: var(--primary-color);
    color: #4285f4;
    border: 1px solid #4285f4;
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);

  &:hover{
    background-color: var(--secondary-color);
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
`

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 25px;
  height: 25px;
`
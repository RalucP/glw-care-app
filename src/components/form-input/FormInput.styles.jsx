import styled, { css } from "styled-components";

const shrinkLabelStyles = css`
  top: -1em;
  font-size: .75em;
  color: var(--secondary-color);
`

export const FormLabel = styled.label`
  text-transform: uppercase;
  color: var(--third-color);
  font-size: 1em;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: .5em;
  top: .6em;
  transition: all 300ms ease;

  ${({shrink}) => shrink && shrinkLabelStyles};
`

export const Input = styled.input`
  color: var(--third-color);
  font-size: 1em;
  padding: .5em;
  display: block;
  width: calc(100% - 1em);
  border: none;
  border-bottom: 1px solid var(--third-color);
  margin: 3em 0;

  &:focus {
    outline: none;

    & ~ ${FormLabel} {
      ${shrinkLabelStyles};
    }

  }
`

export const FormFieldContainer = styled.div`
  position: relative;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`
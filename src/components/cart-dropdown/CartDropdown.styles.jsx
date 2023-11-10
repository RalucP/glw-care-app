import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 18rem;
  height: 27rem;
  top: 4rem;
  right: 4rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-color);
  border: 1px solid var(--secondary-color);
`

export const EmptyMessage = styled.span`
  position: absolute;
  font-size: 1.2em;
  top: 7rem;
  left: 3em;
`

export const CartItemsContainer = styled.div`
  width: 88%;
  padding: 0.5em 1em;
  height: 78%;
  overflow-y: scroll;
`
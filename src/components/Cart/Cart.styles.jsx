import styled from "styled-components";

export const CartIconContainer = styled.div`
  position: relative;
  height: 1.5em;
  width: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ShoppingIcon = styled.img`
  height: 100%;
  object-fit: contain;
`

export const ItemCount = styled.span`
  position: absolute;
  bottom: .1em;
  font-size: .7em;
  font-weight: bold;
`
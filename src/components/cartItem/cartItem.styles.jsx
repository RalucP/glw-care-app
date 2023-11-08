import styled from "styled-components";

export const CartItemContainer = styled.div`
  height: 25%;
  display: flex;
  flex-direction: row;
  padding: .5em;
  border-bottom: 1px solid gray;
`

export const CartItemImage = styled.img`
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  padding: 0 .7em 0 0;
`

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
`

export const CartItemName = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 1.1em;
`

export const CartItemInfo = styled.span`
  padding: 0;

  &::after{
    content: ' SEK';
    font-size: .75em;
  }
`
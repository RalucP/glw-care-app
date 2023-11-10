import styled from "styled-components";

export const CheckoutImage = styled.img`
  width: 10em;
  aspect-ratio: 1/1;
  object-fit: cover;
`

export const CheckoutProductName = styled.td`
  font-size: 1.2em;
  font-weight: bold;
`

export const CheckoutQuantity = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const Arrow = styled.div`
  cursor: pointer;
`

export const CheckoutRemove = styled.td`
  text-align: center;
  cursor: pointer;
`
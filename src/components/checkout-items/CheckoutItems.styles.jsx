import styled from "styled-components";

export const CheckoutImage = styled.img`
  width: 10em;
  aspect-ratio: 1/1;
  object-fit: cover;

  @media screen and (max-width: 800px) {
    width: 4em;
  }
`

export const CheckoutProductName = styled.td`
  font-size: 1.2em;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    font-size: .75em;
  }
`

export const CheckoutQuantity = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`

export const Arrow = styled.div`
  cursor: pointer;
`

export const CheckoutRemove = styled.td`
  text-align: center;
  cursor: pointer;
`
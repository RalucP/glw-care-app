import styled from "styled-components";

export const CheckoutContainer = styled.table`
  width: 80%;
  margin: 5em auto;
  border-collapse: collapse;
`

export const CheckoutHead = styled.thead`
  font-size: 1.1em;

  & td{
    padding-bottom: 2em;
  }
`

export const CheckoutBody = styled.tbody`
  & td{
    padding-top: 1em;
    padding-bottom: 1em;
  }
`

export const CheckoutTotal = styled.td`
  font-size: 1.3em;
  font-weight: bold;
  text-align: right;
`

import styled from "styled-components";

export const PaymentContainer = styled.div`
  height: 7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.form`
  heigth: 5em;
  min-width: 30em;
  
  button{
    margin: 2em 4em;
  }

  @media screen and (max-width: 800px) {
    min-width: 25em;
  }
`
import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5em;
  row-gap: 3em;
  
  @media screen and (max-width: 800px){
    grid-template-columns: repeat(1, 1fr);
    row-gap: 0;
  }
`

export const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
`
import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;

  & button{
    display: none;
    position: absolute;
    top: 18rem;
    width: 80%;
    opacity: .8;
  }

  &:hover{
    
    & .product-image{
      opacity: .7;
    }

    & button{
      display: block;
    }
  }

  @media screen and (max-width: 800px){
    width: 90dvw;
    padding: 1.5em 0;

    button{
      display: block;
      opacity: .9;
      min-width: unset;
      
      &:hover{
        img{
          opacity: unset;
        }

        button{
          opacity: unset;
        }
      }
    }
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
`

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ProductName = styled.h3`
  width: 80%;
  line-height: 1.6em;
`

export const ProductPrice = styled.p`
  font-size: 1.2em;

  &::after{
    content: ' SEK';
    font-size: .65em;
  }
`
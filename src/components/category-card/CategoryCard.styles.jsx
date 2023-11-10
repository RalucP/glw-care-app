import styled from "styled-components";

export const CategoryBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all 1s ease;
`

export const CategoryBodyContainer = styled.div`
  position: absolute;
  background-color: var(--primary-color);
  border: 1px solid var(--secondary-color);
  padding: .3em 2.5em;

  h2{
    font-weight: bolder;
    font-size: 1.7em;
  }

  p{
    font-size: 1.1em;
  }
`

export const CategoryCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  text-align: center;
  min-width: 30%;
  height: 20em;
  border: 1px solid var(--secondary-color);
  margin: .5em .5em 1em;
  overflow: hidden;

  &:hover{
    cursor: pointer;

    & ${CategoryBackgroundImage}{
      transform: scale(1.1);
      transition: all 2s ease;
    }

    & ${CategoryBodyContainer}{
      opacity: .6;
      transition: all .5s ease;
    }
  }
`
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;
`

export const Title = styled(Link)`
  cursor: pointer;
  color: var(--secondary-color);

  &:hover{
    opacity: .7;
  }
`

export const CategoriesPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.5em;
`
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  height: 4rem;
`

export const LogoContainer = styled.img`
  height: 2.5rem;
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
`

export const NavLink = styled(Link)`
  color: var(--secondary-color);
  text-transform: uppercase;
  cursor: pointer;

  &:hover{
    opacity: .7;
  }
`

import styled from "styled-components"
import { FcConferenceCall } from "react-icons/fc"
import { Link } from "gatsby"

export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#fff"
      : "linear-gradient(to bottom,  rgba(255,255,255, 0.9) 0%,rgba(255,255,255,0) 100%)"};
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 999;
  position: sticky;
  font-size: 1rem;

  @media screen and (max-width: 990px) {
    background: ${({ click }) => (click ? "#fff" : "transparent")};
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`
export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`
export const NavIcon = styled(FcConferenceCall)`
  margin: 1.5rem;
`
export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 990px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: flex-end;
  @media screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    top: 80px;
    position: absolute;
    background: #fff;
    transition: all 0.5s ease;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
  }
`
export const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`
export const NavLinks = styled(Link)`
  color: #141414;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "Ubuntu", sans-serif;
  &:hover {
    color: #3498db;
    transition: all 0.6s ease-in-out;
  }
  @media screen and (max-width: 990px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #ff4040;
      transition: all 0.3s ease;
    }
  }
`

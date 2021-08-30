import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { Button } from "../ButtonElement"
import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileMenu,
  NavMenu,
  NavItem,
  NavLinks
} from "./NavbarElemnet"

const Navbar = () => {
  const [click, setclick] = useState(false)
  const [scroll, setscroll] = useState(false)

  const handleClick = () => setclick(!click)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setscroll(true)
    } else {
      setscroll(false)
    }
  }
  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])
  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Explore
            </NavLogo>
            <MobileMenu onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileMenu>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/destination">Destination</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/images">Images</NavLinks>
              </NavItem>
              <NavItem>
                <Button>More</Button>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar

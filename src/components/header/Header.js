import React from 'react'
import { navData } from '../../data/navData'
import { Button } from '../Button'
import { Nav, NavBar, NavLogo, NavMenuItems, NavMenuLink } from './HeaderElements'

function Header() {
    return (
        <Nav>
            <NavLogo to="/">Hossein</NavLogo>
            <NavMenuItems>
                {navData.map(item => (
                    <NavMenuLink to={item.link} key={item.id}>{item.title}</NavMenuLink>
                ))}
            </NavMenuItems>
            <Button to="/trips" rounded primary responsive>Book a flight</Button>
            <NavBar />
        </Nav>
    )
}

export default Header

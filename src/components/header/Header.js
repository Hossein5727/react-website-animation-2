import React from 'react'
import { navData } from '../../data/navData'
import { UseAuth, UseAuthActions } from '../../providers/AuthProvider'
import { Button } from '../Button'
import { Nav, NavBar, NavLogo, NavLogOut, NavMenuItems, NavMenuLink } from './HeaderElements'

function Header({ toggle, isHome }) {

    const Auth = UseAuth()
    const { handleLogOut } = UseAuthActions()

    return (
        <Nav isHome={isHome}>
            <NavLogo to="/">Hossein</NavLogo>
            <NavMenuItems>
                {navData.map(item => (
                    <NavMenuLink to={item.link} key={item.id}>{item.title}</NavMenuLink>
                ))}
            </NavMenuItems>
            {Auth
                ?
                (<div className='flex hidden sm:block'>
                    <h1 className='text-xl text-blue-700 bg-slate-50 p-2 rounded-xl'>{Auth}</h1>
                    <br />
                    <NavLogOut onClick={handleLogOut}>Log Out</NavLogOut>
                </div>)
                :
                (<Button to="/login" rounded primary responsive>Login</Button>)
            }
            <NavBar onClick={toggle} />
        </Nav>
    )
}

export default Header

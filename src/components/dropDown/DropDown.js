import React from 'react'
import { navData } from '../../data/navData'
import { UseAuth, UseAuthActions } from '../../providers/AuthProvider'
import { Button } from '../Button'
import { NavLogOut } from '../header/HeaderElements'
import { DropDownContainer, DropDownLink, DropDownNav, DropDownWrapper } from './DropDownElements'

function DropDown({ isOpen, toggle }) {

    const Auth = UseAuth()
    const { handleLogOut } = UseAuthActions()

    return (
        <DropDownContainer isOpen={isOpen}>
            <DropDownNav onClick={toggle} />
            <DropDownWrapper>
                {navData.map(item => (
                    <DropDownLink onClick={toggle} key={item.id} to={item.link}>{item.title}</DropDownLink>
                ))}
                {Auth
                    ?
                    (<div className='mt-16 flex'>
                        <h1 className='text-xl text-blue-700 bg-slate-50 p-2 rounded-xl'>{Auth}</h1>
                        <br />
                        <NavLogOut onClick={handleLogOut}>Log Out</NavLogOut>
                    </div>)
                    :
                    (<Button to="/login" className={!Auth && "mt-16"} onClick={toggle} rounded >Login</Button>)
                }
            </DropDownWrapper>
        </DropDownContainer>
    )
}

export default DropDown

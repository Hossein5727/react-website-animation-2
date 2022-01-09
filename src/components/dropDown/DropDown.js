import React from 'react'
import { navData } from '../../data/navData'
import { Button } from '../Button'
import { DropDownContainer, DropDownLink, DropDownNav, DropDownWrapper } from './DropDownElements'

function DropDown({ isOpen, toggle }) {
    return (
        <DropDownContainer isOpen={isOpen}>
            <DropDownNav onClick={toggle} />
            <DropDownWrapper>
                {navData.map(item => (
                    <DropDownLink onClick={toggle} key={item.id} to={item.link}>{item.title}</DropDownLink>
                ))}
                <Button className='mt-16' onClick={toggle} rounded to="/login">Login</Button>
            </DropDownWrapper>
        </DropDownContainer>
    )
}

export default DropDown

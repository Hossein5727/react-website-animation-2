import React, { useState } from 'react'
import DropDown from '../components/dropDown/DropDown'
import Header from '../components/header/Header'

function Layout({ children, isHome }) {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='overflow-x-hidden'>
            <DropDown
                isOpen={isOpen}
                toggle={toggle}
            />
            <Header
                isOpen={isOpen}
                toggle={toggle}
                isHome={isHome}
            />
            {children}
        </div>
    )
}

export default Layout

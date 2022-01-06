import React, { useState } from 'react'
import DropDown from '../components/dropDown/DropDown'
import Header from '../components/header/Header'

function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(true)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <DropDown
                isOpen={isOpen}
                toggle={toggle}
            />
            <Header
                isOpen={isOpen}
                toggle={toggle}
            />
            {children}
        </div>
    )
}

export default Layout

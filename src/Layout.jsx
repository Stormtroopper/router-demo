import React from 'react'
import Headers from './components/Headers/Headers'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <Headers />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
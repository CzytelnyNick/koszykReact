import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { CartProvider } from '../context/cart';
function Root() {
    return (
        <div>
            <CartProvider>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </CartProvider>

        </div>

    )
}

export default Root
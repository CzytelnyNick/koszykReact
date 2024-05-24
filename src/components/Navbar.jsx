import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Cart } from 'bootstrap-icons/icons/cart3.svg';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark text-white">
                <Link to='/'><a class="mx-5 fs-1 navbar-brand text-white">Łeb Jak Sklep</a></Link>
                <Link to="carteczka"><div className="mx-5"><Cart color='white' width={25} height={25} ></Cart></div></Link>
                
            </nav>
        </div>
    )
}

export default Navbar
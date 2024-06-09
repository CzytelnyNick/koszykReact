import React, { useContext } from 'react'
import { CartContext } from '../context/cart'
function Product({ img, id, title, cena, description, onClickAdd }) {

    const { addItem } = useContext(CartContext);

    function add(event){
        onClickAdd(event)
    }
    return (
        <div className='col-12 col-md-3'>
            <div class="package ">
            <div class="package2">
                <div class="card-img"><img id={id} class="img" src={img} /></div>
                <div class="card-title">{title}</div>
                <div class="card-subtitle">{description}</div>
                <hr class="card-divider" />
                <div class="card-footer">
                    <div class="card-price"><span>$</span> {cena}</div>
                    
                    <button class=" mx-2 card-btn" onClick={(event) => addItem(event)}>
                        Dodaj do koszyka 
                    </button>
                </div>
            </div>
            </div>
        </div>


    )
}

export default Product
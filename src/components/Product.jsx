import React from 'react'
function Product({ img, title, cena, description }) {
    return (
        <div>
            <div class="card">
                <div class="card-img"><img class="img" src={img} /></div>
                <div class="card-title">{title}</div>
                <div class="card-subtitle">{description}</div>
                <hr class="card-divider" />
                <div class="card-footer">
                    <div class="card-price"><span>$</span> {cena}</div>
                    
                    <button class=" mx-2 butt">
                        Dodaj do koszyka 
                    </button>
                </div>
            </div>

        </div>


    )
}

export default Product
import React from 'react'
import Product from '../components/Product';
import czolg from '../images/czolg.png'
import lopata from '../images/lopata.png'
import gruz from '../images/gruz.png'
import spaghetti from '../images/spaghetti.png'
function Home() {
    return (
        <div><div className="products my-4">
            <Product img={czolg} title={"Czolg"} cena={30} description={"Nowy czołg B)"}></Product>
            <Product img={lopata} title={"Łopata"} cena={2} description={"Łopata Fieldtested"}></Product>
            <Product img={gruz} title={"Gruz"} cena={10} description={"Kilo gruzu"}></Product>
            <Product img={spaghetti} title={"Spaghetti"} cena={5} description={"Po prostu spaghetti"}></Product>


        </div></div>
    )
}

export default Home
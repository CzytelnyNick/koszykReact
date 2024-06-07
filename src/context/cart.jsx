import { createContext, useState } from "react";
import Product from "../components/Product";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        // .. dodaj item do koszyka
        
        /*
        item = {
            id: int,
            name: string,

        }
        
        */
        console.log(item.target.parentElement.parentElement.outerHTML);
        setCartItems([...cartItems, item.target.parentElement.parentElement.children]);
        

        // setCartItems([cart])
        // console.info(item);
    }
    const showItem = () => {
       return( cartItems.map((el) => {
            
            console.log(typeof(el[0]))
            console.log(el[0].outerHTML)
           return <div><div dangerouslySetInnerHTML={{__html:el[0].outerHTML}}></div><div dangerouslySetInnerHTML={{__html:el[1].outerHTML}}></div></div>
        
        }))
    }
    return <CartContext.Provider value = {
        {
            cartItems,
            addItem,
            showItem
        }
    }>
        {children}
    </CartContext.Provider>

}
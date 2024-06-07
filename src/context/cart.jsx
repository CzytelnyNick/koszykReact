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
        console.log(item.target.parentElement.parentElement.children);
        setCartItems([...cartItems, item.target.parentElement.parentElement.children]);
        

        // setCartItems([cart])
        // console.info(item);
    }
    const showItem = () => {
       return( cartItems.map((el) => {
            
            
           return <div dangerouslySetInnerHTML={el[0]}></div>
        
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
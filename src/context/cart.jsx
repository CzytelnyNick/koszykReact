import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        // .. dodaj item do koszyka
        setCartItems([...cartItems, item.target.parentElement.parentElement.children])
        // setCartItems([cart])
        // console.info(item);
    }
    const showItem = () => {
        cartItems.map((el) => {
            console.log(el[0])
            return(<div>{el[0]}</div>)
        })
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
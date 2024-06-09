import { createContext, useState } from "react";
import Product from "../components/Product";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [elBefore, setEl] = useState("")
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        // .. dodaj item do koszyka
        
        /*
        item = {
            id: int,
            name: string,

        }
        
        */
        // console.log(item.target.parentElement.parentElement.children.item(0));
        setCartItems([...cartItems, item.target.parentElement.parentElement.children]);
        

        // setCartItems([cart])
        // console.info(item);
    }
    
    const showItem = () => {
        // Definicja obiektu z regexami i licznikami
        const items = {
            czolg: { regex: /czolg/, count: 0, price: 30 },
            lopata: { regex: /lopata/, count: 0, price:20 },
            gruz: { regex: /gruz/, count: 0, price: 40 },
            spaghetti: { regex: /spaghetti/, count: 0, price: 4 }
        };
    
        // Iteracja przez produkty w koszyku
        cartItems.forEach((el) => {
            // console.log('outerHTML:', el[0].outerHTML); // Debugging: Zobacz co jest w outerHTML
            
            // Sprawdzanie każdego regexa i aktualizacja liczników
            for (const item in items) {
                if (items[item].regex.test(el[0].outerHTML)) {
                    items[item].count++;
                    // console.log(`Znaleziono ${item}, nowa ilość: ${items[item].count}`); // Debugging: Pokaż dopasowanie i nową ilość
                }
            }
        });
    
        // Generowanie wierszy tabeli dla unikalnych produktów
        return Object.keys(items).map((item) => {
            if (items[item].count > 0) {
                return (
                    <tr key={item}>
                        <td>{item}</td>
                        <td>{items[item].count}</td>
                        <td>{items[item].count* items[item].price} $</td>
                    </tr>
                );
            }
            return null; // Nie zwracaj nic, jeśli licznik jest 0
        }).filter(Boolean); // Usuwa wartości null z tablicy
    };
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
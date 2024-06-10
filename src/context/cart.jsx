import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    
    const addItem = (item) => {
        setCartItems([...cartItems, item.target.parentElement.parentElement.children]);
    };

    const incrementItem = (itemName) => {
        const updatedCartItems = cartItems.map((el) => {
          console.log(el)
          if (el[0].outerHTML.includes(itemName)) {
            const countElement = el[1]; // Assuming that the count is in the second element
            const count = parseInt(countElement.outerHTML.match(/\d+/)[0]) + 1;
            countElement.outerHTML = countElement.outerHTML.replace(/\d+/, count);
          }
          return el;
        });
        setCartItems(updatedCartItems);
      };

    const removeItem = (itemName) => {
        const updatedCartItems = [];
        let itemRemoved = false;

        for (let el of cartItems) {
            if (el[0].outerHTML.includes(itemName) && !itemRemoved) {
                itemRemoved = true; // Usuń tylko jeden egzemplarz danego produktu
            } else {
                updatedCartItems.push(el);
            }
        }
        
        setCartItems(updatedCartItems);
        console.log(cartItems)
    };

    const showItem = () => {
        const items = {
            czolg: { regex: /czolg/, count: 0, price: 30 },
            lopata: { regex: /lopata/, count: 0, price: 20 },
            gruz: { regex: /gruz/, count: 0, price: 40 },
            spaghetti: { regex: /spaghetti/, count: 0, price: 4 }
        };

        cartItems.forEach((el) => {
            for (const item in items) {
                if (items[item].regex.test(el[0].outerHTML)) {
                    items[item].count++;
                }
            }
        });

        return Object.keys(items).map((item) => {
            if (items[item].count > 0) {
                return (
                    <tr key={item}>
                        <td>{item}</td>
                        <td>{items[item].count}</td>
                        <td>{items[item].count * items[item].price} $</td>
                        <td>
                            <button onClick={() => removeItem(item)}>usun</button>
                        </td>
                        <td>
                            <button onClick={() => incrementItem(items[item].count)}>dodaj</button>
                        </td>
                    </tr>
                );
            }
            return null;
        }).filter(Boolean);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItem, incrementItem, removeItem, showItem }}>
            {children}
        </CartContext.Provider>
    );
};

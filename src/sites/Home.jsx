import { React, useState, useContext, createContext } from "react";
import Product from "../components/Product";
import czolg from "../images/czolg.png";
import lopata from "../images/lopata.png";
import gruz from "../images/gruz.png";
import spaghetti from "../images/spaghetti.png";
import items from "../items";
function Home() {
  
  // const { addItem } = useContext(CartContext)

  function add(event) {
    console.log(event.target.parentElement.parentElement.children);
    // setTab([...tab, event.target.parentElement.parentElement.children]);
    // const NewTab = createContext();
    // <NewTab.Provider value={tab}></NewTab.Provider>
    // console.log(tab);
  }
  return (
    <div className="container">
      <div className="products my-4">
        <div className="row">
          {items.map((item) => {
           return <Product img={item.image} title={item.title} cena={item.price} description={item.subtitle}></Product>

          })}
         
        </div>
      </div>
    </div>
  );
}

export default Home;

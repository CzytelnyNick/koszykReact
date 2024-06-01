import { React, useState, useContext, createContext } from "react";
import Product from "../components/Product";
import czolg from "../images/czolg.png";
import lopata from "../images/lopata.png";
import gruz from "../images/gruz.png";
import spaghetti from "../images/spaghetti.png";
function Home() {
  const [tab, setTab] = useState([]);
  function add(event) {
    console.log(event.target.parentElement.parentElement.children);
    setTab([...tab, event.target.parentElement.parentElement.children]);
    const NewTab = createContext();
    <NewTab.Provider value={[tab]}></NewTab.Provider>
    console.log(tab);
  }
  return (
    <div className="container">
      <div className="products my-4">
        <div className="row">
          <Product
            img={czolg}
            title={"Czolg"}
            cena={30}
            description={"Nowy czołg B)"}
            onClickAdd={add}
          ></Product>
          <Product
            img={lopata}
            title={"Łopata"}
            cena={2}
            description={"Łopata Fieldtested"}
            onClickAdd={add}
          ></Product>
          <Product
            img={gruz}
            title={"Gruz"}
            cena={10}
            description={"Kilo gruzu"}
            onClickAdd={add}
          ></Product>
          <Product
            img={spaghetti}
            title={"Spaghetti"}
            cena={5}
            description={"Po prostu spaghetti"}
            onClickAdd={add}
          ></Product>
        </div>
      </div>
    </div>
  );
}
export const NewTab = createContext("");
export default Home;

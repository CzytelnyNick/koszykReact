import React, { useContext } from "react";
import { CartContext } from "../context/cart";
function MainCartWidget() {
  const { showItem } = useContext(CartContext);

  return (
    <div>
      <div class="card2">
        <table class="table table-dark table-borderless">
          {" "}
          <thead>
            <tr>
              
              <th scope="col">Nazwa</th>
              <th scope="col">Ilosc</th>
              <th scope="col">Koszt</th>
              
              <th scope="col">Usuwanie</th>
              <th scope="col">Dodawanie</th>
            </tr>
          </thead>
          <tbody>
          {showItem()}
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default MainCartWidget;

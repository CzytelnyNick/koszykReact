import React, {useContext} from "react";
import { CartContext } from '../context/cart'
function MainCartWidget() {
  const { showItem } = useContext(CartContext);
  
  return (
    <div>
      <div class="card2">
      {showItem()}
      </div>
    </div>
  );
}

export default MainCartWidget;

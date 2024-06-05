import React, {useContext} from "react";
import { CartContext } from '../context/cart'
function MainCartWidget() {
  const { showItem } = useContext(CartContext);
  showItem()
  return (
    <div>
      <div class="card2">
        
      </div>
    </div>
  );
}

export default MainCartWidget;

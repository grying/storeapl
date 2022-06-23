

import { useSelector } from "react-redux";
import BasketChoice from "./BasketChoice/BasketChoice";
import BasketEmpty from "./BasketEmpty/BasketEmpty";
const Basket = () => {
    const { totalPrice, items } = useSelector((state) => state.cart);
  return <>{totalPrice > 0 ? <BasketChoice /> : <BasketEmpty />}</>;
};

export default Basket;

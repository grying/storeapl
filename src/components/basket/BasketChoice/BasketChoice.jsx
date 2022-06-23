import Header from "../../haeder/Header";
import "./BaseChoice.scss";
import BasketItem from "./BasketItems";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect , useRef } from "react";


const BasketChoice = () => {

  const { totalPrice, items } = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {


    localStorage.setItem("myCat", "Tom");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  return (
    <>
      <Header pathName="Корзина" classActive1="head" classActive2="head-page" />
      <h1 className="basket-title">Корзина</h1>

      <section className="basket">
        <div className="basket__goods">
          {cartItems.map((item) => (
            <BasketItem key={item.id} {...item} />
          ))}
        </div>
        <div className="basket__registration">
          <div className="basket__total">
            <div className="basket__total-info">
              <div className="basket__total-title">ИТОГО</div>
              <div className="basket__total-price">₸ {totalPrice}</div>
            </div>

            <Link to="registr">
              <button className=" button basket__btn">
                Перейти к оформлению
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BasketChoice;

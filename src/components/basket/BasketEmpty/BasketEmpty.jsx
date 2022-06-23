import { Link } from "react-router-dom";
import basketEmpty from "../../../img/basket-empty.svg";
import Header from "../../haeder/Header";

import "./basketEmpty.scss";
const BasketEmpty = () => {
  return (
    <>
      <Header></Header>
      
      <div className="basket-empty">
        <img
          className="basket-empty__img"
          src={basketEmpty}
          alt="basketEmpty"
        />
        <h2 className="basket-empty__title">Корзина пуста</h2>
        <h3 className="basket-empty__text">
          Но это никогда не поздно исправить :)
        </h3>
        <Link to="/">
          <div className="btn">
            <button className="button basket-empty__button ">
              В каталог товаров
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BasketEmpty;

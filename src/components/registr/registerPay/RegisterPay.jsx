import "./registerPay.scss";
import visa from "../../../img/visa.svg";
import cart from "../../../img/cart.svg";

const RegisterPay = () => {
  return (
    <div className="pay">
      <div className="registr__total-title">Ваш заказ</div>
      <div className="pay__items">
        <div className="pay__item">
          <img className="pay__img" src={visa} alt="visa" />
          <div className="pay__text">Счет на kaspi.kz</div>
        </div>
        <div className="pay__item">
          <img className="pay__img" src={cart} alt="cart" />
          <input
            placeholder="Есть промокод?"
            type="text"
            className="pay__promo"
          ></input>
        </div>
        <div className="pay__total">
          <div className="pay__title">К ОПЛАТЕ</div>
          <div className="pay__cost">3 426 ₸</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPay;

import Header from "../haeder/Header";
import RegisterPay from "./registerPay/RegisterPay";



const Registr = () => {
  return (
    <>
      <Header
        pathName="Оформление заказа"
        classActive1="head"
        classActive2="head-page"
      />
      <section className="registr">
        <div className="registr__delivery">
          <div className="registr__delivery-info">
            <div className="registr__delivery-title">Доставка курьером</div>
            <div className="registr__delivery-price"> 499 ₸</div>
          </div>

          <form className="registr__form">
            <input type="text" placeholder="город" className="input" />
            <input type="text" placeholder="Улица / Район" className="input" />
            <div className="registr__form-box">
              <input type="text" placeholder="Дом" className="input" />
              <input type="text" placeholder="Подъезд" className="input" />
              <input type="text" placeholder="Квартира" className="input" />
              <input type="text" placeholder="Этаж" className="input" />
            </div>
          </form>
        </div>

        <div className="registr__oreder">
          <div className="registr__total">
            <div className="registr__total-title">Ваш заказ</div>
            <div className="registr__goods">
              <div className="registr__good">
                <span>1x</span>
                <div className="registr__good-name">
                  Наушники Apple BYZ S852I
                </div>
                <div className="registr__good-price">₸ 2 927</div>
              </div>
            </div>
     
            <div className="registr__order-delivery">
              <div className="registr__order-delivery-title">Доставка</div>
              <div className="registr__order-delivery-price">₸ 499</div>
            </div>
            <div className="registr__order-delivery">
              <div className="registr__order-delivery-title">К оплате</div>
              <div className="registr__order-delivery-price">₸ 499</div>
            </div>
          </div>
          <RegisterPay></RegisterPay>
          <div className="pay__btn">

          <button className="button pay__button">Закончить оформление</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Registr;

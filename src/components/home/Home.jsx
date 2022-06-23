import case1 from "../../img/case/case-1.png";
import case2 from "../../img/case/case-2.png";
import case3 from "../../img/case/case-3.png";
import Banner from "./Banner";
import ProductCart from "./ProductCart";
import { useEffect, useState } from "react";
import Sceleton from "./sceleton";
import Header from "../haeder/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhone } from "../../redux/slices/phoneSlice";

function Home() {
  
    const  {items, status} = useSelector((state) => state.phone);
    console.log(items);

    const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchPhone() ); 
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <section className="case">
        <h1 className="product-title">Чехлы</h1>
        <div className="products">
          <div className="products__item">
            <img className="products__item-case-img" src={case1} alt="case" />
            <h4 className="products__item-case-title">Стеклянные</h4>
          </div>
          <div className="products__item">
            <img className="products__item-case-img" src={case2} alt="case" />
            <h4 className="products__item-case-title">Силиконовые</h4>
          </div>
          <div className="products__item">
            <img className="products__item-case-img" src={case3} alt="case" />
            <h4 className="products__item-case-title">Кожаные</h4>
          </div>
        </div>
      </section>
      <div className="products">
       
        {status === "error" ?  <h1>щось пішло не так(</h1>:  status === "loading"
          ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
          : items.map((obj) => <ProductCart key={obj.id} {...obj} />)  }
       
      </div>
    </>
  );
}

export default Home;

import star from "../../img/star.svg";
import heartDefault from "../../img/heard-default.svg";
import heartActive from "../../img/heart-active.svg";
import { useSelector, useDispatch } from "react-redux";

import { addItem } from "../../redux/slices/cartSlice";
import {
  addItemFavorite,
  toggleHeart,
} from "../../redux/slices/favoriteSlice.js";

function ProductCart({ id, title, img, name, price, rating, favorite }) {
   const heart = useSelector((state) => state.favorite.heart);

   
  
  const dispatch = useDispatch();
  const hearting = () => {
    dispatch(toggleHeart({ id }));
  };
  
  const onClickAdd = () => {
    const item = {
      id,
      img,
      name,
      price,
    };
    dispatch(addItem(item));
  };
  const onClickFavorite = () => {
    const item = {
      id,
      img,
      name,
      price,
      rating,
      favorite,
    };
    dispatch(addItemFavorite(item));
  };
  const countBtn = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );
  const addedCount = countBtn ? countBtn.count : 0;

  return (
    <>
      {title !== undefined ? (
        <h1 className="product-title">{title}</h1>
      ) : (
        <div className="products__item">
          <div onClick={onClickFavorite} className="products__item-heart">
            <img
              onClick={hearting}
              src={
                heart.some((obj) =>obj === id)
                  ?heartActive
                  :  heartDefault
              }
              alt="heart"
            />
          </div>
          <img className="products__item-img" src={img} alt="productCart" />
          <div className="products__item-text">
            <div className="products__item-name">{name}</div>
            <div className="products__item-price">{price} ₸</div>
          </div>
          <div className="products__item-star">
            <img src={star} alt="star" />
            <div className="products__item-star-text">{rating}</div>
            <div onClick={onClickAdd} className="products__item-add">
              <div className="products__item-add-img">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="#1C1C27"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="#000"
                  />
                </svg>
              </div>
              <div className="products__item-add-text">Добавити</div>
              {addedCount > 0 && (
                <span className="products__item-add-number">
                  <p>{addedCount}</p>
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ProductCart;

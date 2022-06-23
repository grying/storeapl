import { useDispatch } from "react-redux";
import deleteIcon from "../../../img/delete-icon.svg";

import clsx from "clsx";
import {
  addItem,
  minusItem,
  removeItem,
} from "../../../redux/slices/cartSlice";
const BasketItem = ({ id, img, name, price, count }) => {
  

  

  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem({ id }));
  };

  const onClickRemove = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="basket__goods-item">
      <img
        onClick={onClickRemove}
        className="basket__delete"
        src={deleteIcon}
        alt="deleteIcons"
      />
      <div className="basket__info">
        <img className="basket__img" src={img} alt="basketImg" />
        <div>
          <h2 className="basket__title">{name}</h2>
          <p className="basket__text">{price} ₸</p>
        </div>
      </div>
      <div className="basket__number">
        <div className="basket__add">
          <button
            disabled={count === 1}
            onClick={onClickMinus}
            className={clsx('basket__minus basket__plus-minus',{'basket__minus-disabled': count ===1})}
          ></button>
          <div className="basket__add-number">{count}</div>
          <div
            onClick={onClickPlus}
            className="basket__plus basket__plus-minus"
          ></div>
        </div>
        <div className="basket__add-price">{count * price} ₸</div>
      </div>
    </div>
  );
};

export default BasketItem;

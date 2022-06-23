import { useDispatch, useSelector } from "react-redux";
import Header from "../haeder/Header";
import heartDefault from "../../img/heard-default.svg";
import heartActive from "../../img/heart-active.svg";
import star from "../../img/star.svg";
import {
  addItemFavorite,
} from "../../redux/slices/favoriteSlice";
const Favorite = () => {
 const dispatch = useDispatch()
  const { itemsFavorite } = useSelector((state) => state.favorite);
  const delItem = (id, favorite) => {
    console.log(id)
    dispatch(addItemFavorite( {id, favorite }))
    
  };
  return (
    <>
      <Header
        pathName="Избранное"
        classActive1="head"
        classActive2="head-page"
      ></Header>
      <section className="favorite">
        <h2 className="favorite__title">Избранное</h2>
        <div className="products">
          {itemsFavorite.map(({ id, img, name, price, rating, favorite }) => (
            <div className="products__item">
              <div
                onClick={() => delItem(id, favorite)}
                className="products__item-heart"
              >
                <img src={heartActive} alt="heart" />
              </div>
              <img className="products__item-img" src={img} alt="productCart" />
              <div className="products__item-text">
                <div className="products__item-name">{name}</div>
                <div className="products__item-price">{price} ₸</div>
              </div>
              <div className="products__item-star">
                <img src={star} alt="star" />
                <div className="products__item-star-text">{rating}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Favorite;

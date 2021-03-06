import { useRef, useState } from "react";
import ListPhone from "./ListPhone";
import Language from "../footer/Language";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import arrowLeft from "../../img/left-arrow.svg";
import { useEffect } from "react";

function Header({ pathName, classActive1, classActive2 }) {
  const [menuActive, setMenuActive] = useState(true);
  const [menuActiveMobile, setMenuActiveMobile] = useState(true);
  const { itemsFavorite } = useSelector((state) => state.favorite);
  const { items } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const isMyCart = useRef(false);
  useEffect(() => {
    if (isMyCart.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMyCart.current= true
  });

  return (
    <div className="header">
      <Link to="/">
        {" "}
        <div className={`header__logo ` + classActive1}>
          <svg
            width="105"
            height="50"
            viewBox="0 0 105 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.55 34.3C19.1833 34.3 17.9083 34.075 16.725 33.625C15.5583 33.175 14.5417 32.5417 13.675 31.725C12.825 30.9083 12.1583 29.95 11.675 28.85C11.2083 27.75 10.975 26.55 10.975 25.25C10.975 23.95 11.2083 22.75 11.675 21.65C12.1583 20.55 12.8333 19.5917 13.7 18.775C14.5667 17.9583 15.5833 17.325 16.75 16.875C17.9167 16.425 19.1833 16.2 20.55 16.2C21.9333 16.2 23.2 16.425 24.35 16.875C25.5167 17.325 26.525 17.9583 27.375 18.775C28.2417 19.575 28.9167 20.525 29.4 21.625C29.8833 22.725 30.125 23.9333 30.125 25.25C30.125 26.55 29.8833 27.7583 29.4 28.875C28.9167 29.975 28.2417 30.9333 27.375 31.75C26.525 32.55 25.5167 33.175 24.35 33.625C23.2 34.075 21.9333 34.3 20.55 34.3ZM26.275 38.025C25.5917 38.025 24.9417 37.95 24.325 37.8C23.725 37.65 23.125 37.4083 22.525 37.075C21.9417 36.7417 21.325 36.2917 20.675 35.725C20.0417 35.1583 19.35 34.4583 18.6 33.625L22.85 32.55C23.3 33.1667 23.7167 33.6583 24.1 34.025C24.4833 34.3917 24.85 34.65 25.2 34.8C25.5667 34.95 25.95 35.025 26.35 35.025C27.4167 35.025 28.3667 34.5917 29.2 33.725L31 35.875C29.8167 37.3083 28.2417 38.025 26.275 38.025ZM20.55 30.85C21.3333 30.85 22.05 30.7167 22.7 30.45C23.3667 30.1833 23.95 29.8 24.45 29.3C24.95 28.8 25.3333 28.2083 25.6 27.525C25.8833 26.825 26.025 26.0667 26.025 25.25C26.025 24.4167 25.8833 23.6583 25.6 22.975C25.3333 22.2917 24.95 21.7 24.45 21.2C23.95 20.7 23.3667 20.3167 22.7 20.05C22.05 19.7833 21.3333 19.65 20.55 19.65C19.7667 19.65 19.0417 19.7833 18.375 20.05C17.7083 20.3167 17.125 20.7 16.625 21.2C16.1417 21.7 15.7583 22.2917 15.475 22.975C15.2083 23.6583 15.075 24.4167 15.075 25.25C15.075 26.0667 15.2083 26.825 15.475 27.525C15.7583 28.2083 16.1417 28.8 16.625 29.3C17.125 29.8 17.7083 30.1833 18.375 30.45C19.0417 30.7167 19.7667 30.85 20.55 30.85ZM33.1688 34V16.5H40.7438C42.3104 16.5 43.6604 16.7583 44.7938 17.275C45.9271 17.775 46.8021 18.5 47.4188 19.45C48.0354 20.4 48.3438 21.5333 48.3438 22.85C48.3438 24.15 48.0354 25.275 47.4188 26.225C46.8021 27.175 45.9271 27.9083 44.7938 28.425C43.6604 28.925 42.3104 29.175 40.7438 29.175H35.4188L37.2188 27.35V34H33.1688ZM37.2188 27.8L35.4188 25.875H40.5188C41.7688 25.875 42.7021 25.6083 43.3188 25.075C43.9354 24.5417 44.2438 23.8 44.2438 22.85C44.2438 21.8833 43.9354 21.1333 43.3188 20.6C42.7021 20.0667 41.7688 19.8 40.5188 19.8H35.4188L37.2188 17.875V27.8ZM51.2352 34V16.5H55.2852V34H51.2352ZM67.8133 34.3C66.4633 34.3 65.2049 34.0833 64.0383 33.65C62.8883 33.2 61.8883 32.5667 61.0383 31.75C60.1883 30.9333 59.5216 29.975 59.0383 28.875C58.5716 27.775 58.3383 26.5667 58.3383 25.25C58.3383 23.9333 58.5716 22.725 59.0383 21.625C59.5216 20.525 60.1883 19.5667 61.0383 18.75C61.9049 17.9333 62.9133 17.3083 64.0633 16.875C65.2133 16.425 66.4716 16.2 67.8383 16.2C69.3549 16.2 70.7216 16.4667 71.9383 17C73.1716 17.5167 74.2049 18.2833 75.0383 19.3L72.4383 21.7C71.8383 21.0167 71.1716 20.5083 70.4383 20.175C69.7049 19.825 68.9049 19.65 68.0383 19.65C67.2216 19.65 66.4716 19.7833 65.7883 20.05C65.1049 20.3167 64.5133 20.7 64.0133 21.2C63.5133 21.7 63.1216 22.2917 62.8383 22.975C62.5716 23.6583 62.4383 24.4167 62.4383 25.25C62.4383 26.0833 62.5716 26.8417 62.8383 27.525C63.1216 28.2083 63.5133 28.8 64.0133 29.3C64.5133 29.8 65.1049 30.1833 65.7883 30.45C66.4716 30.7167 67.2216 30.85 68.0383 30.85C68.9049 30.85 69.7049 30.6833 70.4383 30.35C71.1716 30 71.8383 29.475 72.4383 28.775L75.0383 31.175C74.2049 32.1917 73.1716 32.9667 71.9383 33.5C70.7216 34.0333 69.3466 34.3 67.8133 34.3ZM81.3982 30L81.1732 25.325L89.5482 16.5H94.0482L86.4982 24.625L84.2482 27.025L81.3982 30ZM77.7732 34V16.5H81.7982V34H77.7732ZM89.7482 34L83.5232 26.375L86.1732 23.5L94.4732 34H89.7482Z"
              fill="#101010"
            />
          </svg>
        </div>
      </Link>
      <div className={"display-none " + classActive2}>
        <div className="name-page ">
          <Link to="/">
            <img src={arrowLeft} alt="arrow-left" />
          </Link>
          <div className="name-page__title">{pathName}</div>
        </div>
      </div>

      <div className="header__phone-top">
        {" "}
        <div
          onClick={() => setMenuActive(!menuActive)}
          className="header__phone"
        >
          ?????????????? ???????????? ????????????????
          <div
            className={
              menuActive
                ? "header__phone-arrow-down"
                : "header__phone-arrow-down header__phone-arrow-down-active"
            }
          >
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 5L0 1.24978L1.33396 0L4 2.50044L6.66604 0L8 1.24978L4 5Z"
                fill="#101010"
              />
            </svg>
          </div>
          <ListPhone menuActive={menuActive}></ListPhone>
        </div>
      </div>
      <div className="header__options">
        <Link to="/favorites">
          <div className="header__heart-favorite ">
            <span className="number">{itemsFavorite.length}</span>
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4867 1.65429C14.0706 -0.627558 18.0635 -0.551821 20.5528 1.90098C23.0409 4.35486 23.1267 8.2629 20.8124 10.812L11.4845 20L2.15892 10.812C-0.155442 8.2629 -0.0685429 4.34837 2.41851 1.90098C4.90996 -0.548575 8.89519 -0.630804 11.4867 1.65429ZM18.9952 3.42979C17.3452 1.80469 14.6833 1.73869 12.9563 3.26425L11.4878 4.56044L10.0183 3.26533C8.2858 1.73761 5.62935 1.80469 3.97498 3.43195C2.33601 5.04407 2.25351 7.62455 3.76379 9.32971L11.4856 16.937L19.2075 9.3308C20.7189 7.62455 20.6364 5.04732 18.9952 3.42979Z"
                fill="#838383"
              />
            </svg>
          </div>
        </Link>
        <Link to="/basket">
          {" "}
          <div className="header__basket ">
            <span className="number">{totalCount}</span>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08589 6.04598L0.48584 2.50532L2.05663 0.959961L5.65556 4.50172H22.5757C22.7487 4.50171 22.9193 4.54149 23.074 4.61789C23.2286 4.69428 23.3629 4.80518 23.4662 4.94173C23.5695 5.07828 23.639 5.2367 23.669 5.40435C23.699 5.57199 23.6888 5.74422 23.6391 5.90729L20.9749 14.6443C20.9064 14.8693 20.7659 15.0667 20.5743 15.2069C20.3827 15.3472 20.1503 15.423 19.9114 15.423H6.30608V17.6072H18.5172V19.7915H5.19598C4.90157 19.7915 4.61921 19.6764 4.41103 19.4716C4.20284 19.2668 4.08589 18.989 4.08589 18.6993V6.04598ZM6.30608 6.68597V13.2387H19.0855L21.0837 6.68597H6.30608ZM5.75103 24.16C5.30941 24.16 4.88587 23.9874 4.5736 23.6801C4.26132 23.3729 4.08589 22.9562 4.08589 22.5218C4.08589 22.0873 4.26132 21.6706 4.5736 21.3634C4.88587 21.0562 5.30941 20.8836 5.75103 20.8836C6.19266 20.8836 6.61619 21.0562 6.92847 21.3634C7.24074 21.6706 7.41618 22.0873 7.41618 22.5218C7.41618 22.9562 7.24074 23.3729 6.92847 23.6801C6.61619 23.9874 6.19266 24.16 5.75103 24.16ZM19.0722 24.16C18.6306 24.16 18.207 23.9874 17.8948 23.6801C17.5825 23.3729 17.4071 22.9562 17.4071 22.5218C17.4071 22.0873 17.5825 21.6706 17.8948 21.3634C18.207 21.0562 18.6306 20.8836 19.0722 20.8836C19.5138 20.8836 19.9374 21.0562 20.2496 21.3634C20.5619 21.6706 20.7373 22.0873 20.7373 22.5218C20.7373 22.9562 20.5619 23.3729 20.2496 23.6801C19.9374 23.9874 19.5138 24.16 19.0722 24.16Z"
                fill="#838383"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div
        className="header__burger"
        onClick={() => {
          setMenuActiveMobile(!menuActiveMobile);
        }}
      >
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H20V2.25H0V0ZM0 7.875H20V10.125H0V7.875ZM0 15.75H20V18H0V15.75Z"
            fill="#838383"
          />
        </svg>
      </div>

      <div
        onClick={() => {
          setMenuActiveMobile(!menuActiveMobile);
        }}
        className={
          menuActiveMobile
            ? "header-mobile"
            : "header-mobile header-mobile__active"
        }
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="header-mobile__wrapper header-mobile__wrapper-active"
        >
          <div
            onClick={() => setMenuActive(!menuActive)}
            className="header-mobile__item header__phone"
          >
            ?????????????? ???????????? ????????????????
            <div
              className={
                menuActive
                  ? "header__phone-arrow-down"
                  : "header__phone-arrow-down header__phone-arrow-down-active"
              }
            >
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 5L0 1.24978L1.33396 0L4 2.50044L6.66604 0L8 1.24978L4 5Z"
                  fill="#101010"
                />
              </svg>
            </div>
            <ListPhone menuActive={menuActive}></ListPhone>
          </div>
          <Link
            to="/favorites"
            className="header-mobile__item  header-mobile__favorite"
          >
            <div className="header-mobile__favorite-icon">
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.50061 1.15801C9.26233 -0.439291 11.9848 -0.386275 13.682 1.33069C15.3785 3.04841 15.437 5.78403 13.859 7.5684L7.49911 14L1.14073 7.5684C-0.437237 5.78403 -0.377988 3.04386 1.31773 1.33069C3.01645 -0.384003 5.73365 -0.441563 7.50061 1.15801ZM12.62 2.40085C11.495 1.26328 9.68007 1.21708 8.50259 2.28498L7.50136 3.19231L6.49938 2.28573C5.31816 1.21632 3.50694 1.26328 2.37896 2.40237C1.26148 3.53085 1.20523 5.33718 2.23496 6.5308L7.49986 11.8559L12.7648 6.53156C13.7952 5.33718 13.739 3.53312 12.62 2.40085Z"
                  fill="#101010"
                />
              </svg>
            </div>
            <div className="header-mobile__favorite-text">?????????????????? </div>
          </Link>
          <Link
            to="/service"
            className="header-mobile__item header-mobile__terms"
          >
            <div className="header-mobile__terms-icon">
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1667 17H0.833333C0.61232 17 0.400358 16.9104 0.244078 16.751C0.0877973 16.5916 0 16.3754 0 16.15V0.85C0 0.624566 0.0877973 0.408365 0.244078 0.248959C0.400358 0.0895533 0.61232 0 0.833333 0H14.1667C14.3877 0 14.5996 0.0895533 14.7559 0.248959C14.9122 0.408365 15 0.624566 15 0.85V16.15C15 16.3754 14.9122 16.5916 14.7559 16.751C14.5996 16.9104 14.3877 17 14.1667 17ZM13.3333 15.3V1.7H1.66667V15.3H13.3333ZM3.33333 3.4H6.66667V6.8H3.33333V3.4ZM3.33333 8.5H11.6667V10.2H3.33333V8.5ZM3.33333 11.9H11.6667V13.6H3.33333V11.9ZM8.33333 4.25H11.6667V5.95H8.33333V4.25Z"
                  fill="#101010"
                />
              </svg>
            </div>
            <div className="header-mobile__terms-text">?????????????? ??????????????</div>
          </Link>
          <Link
            to="/contact"
            className="header-mobile__item  header-mobile__??ontacts"
          >
            <div className="header-mobile__??ontacts-icon">
              <svg
                width="15"
                height="21"
                viewBox="0 0 15 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.14286 2.1V18.9H12.8571V2.1H2.14286ZM1.07143 0H13.9286C14.2127 0 14.4853 0.110625 14.6862 0.307538C14.8871 0.504451 15 0.771523 15 1.05V19.95C15 20.2285 14.8871 20.4955 14.6862 20.6925C14.4853 20.8894 14.2127 21 13.9286 21H1.07143C0.787268 21 0.514746 20.8894 0.313814 20.6925C0.112883 20.4955 0 20.2285 0 19.95V1.05C0 0.771523 0.112883 0.504451 0.313814 0.307538C0.514746 0.110625 0.787268 0 1.07143 0ZM7.5 15.75C7.78416 15.75 8.05668 15.8606 8.25761 16.0575C8.45855 16.2544 8.57143 16.5215 8.57143 16.8C8.57143 17.0785 8.45855 17.3455 8.25761 17.5425C8.05668 17.7394 7.78416 17.85 7.5 17.85C7.21584 17.85 6.94332 17.7394 6.74239 17.5425C6.54145 17.3455 6.42857 17.0785 6.42857 16.8C6.42857 16.5215 6.54145 16.2544 6.74239 16.0575C6.94332 15.8606 7.21584 15.75 7.5 15.75Z"
                  fill="#838383"
                />
              </svg>
            </div>
            <div className="header-mobile__??ontacts-text">????????????????</div>
          </Link>
          <div className="header-mobile__item header-mobile__language">
            <Language />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

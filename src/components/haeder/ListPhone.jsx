

const listNamePhone = [
  "Apple",
  "INOI",
  "Nokia",
  "Oppo",
  "Xiaomi",
  "Realme",
  "Samsung",
  "Sony",
  "Vivo",
];

// ;

const ListPhone = ({menuActive}) => {
  return (
    <ul
      onClick={e=> e.stopPropagation()}
      className={
        menuActive
          ? "header__items"
          : "header__items  header__items-active"
      }
    >
      {listNamePhone.map((item, i) => {
        return (
          <li key={i + 12} className="header__item">
            <span className="header__item-name">
              <div className="header__item-arrow">
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
              {item}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ListPhone;

import { NavLink } from "react-router";
import style from "./Header.module.scss";
import { FaShoppingCart, FaHeart, FaUserAlt } from "react-icons/fa";

export const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.logoCont}>
        <img src="public\img\logo.png" alt="gde" className={style.img} />
        <div className={style.logoTextCont}>
          <h4>REACT SNEAKERS</h4>
          <h5>Магазин лучших кроссовок</h5>
        </div>
      </div>
      <div className={style.btnCont}>
        <div className="shop">
          <NavLink to="/">
            <FaShoppingCart />
          </NavLink>
        </div>
        <div className="favourite">
          <NavLink to="favourite">
            <FaHeart />
          </NavLink>
        </div>
        <div className="profile">
          <NavLink to="profile">
            <FaUserAlt />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

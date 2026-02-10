import { NavLink } from "react-router";
import style from "./Header.module.scss";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

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
            <IoCartOutline className={style.iconsColor} />
          </NavLink>
        </div>
        <div className="favourite">
          <NavLink to="favourite">
            <FaRegHeart className={style.iconsColor} />
          </NavLink>
        </div>
        <div className="profile">
          <NavLink to="profile">
            <FaRegUser className={style.iconsColor} />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

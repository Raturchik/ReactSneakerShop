import { useContext } from "react";
import { AppContext } from "../../context";
import style from "./Card.module.scss";
import { FaRegHeart } from "react-icons/fa";

export function Cards() {
  const context = useContext(AppContext);
  console.log(context);

  return (
    <div className={style.cardCont}>
      {context ? (
        context.map((item) => (
          <div key={item.id} className={style.cardStyle}>
            <div className="card">
              <div className={style.cardImgCont}>
                <img className={style.cardImg} src={item.imageUrl} />
                <span className="card-title">{item.title}</span>
                <button className={style.favourite}>
                  <FaRegHeart className={style.favouriteHeart} />
                </button>
              </div>
              <div className="card-content">
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No</p>
      )}
    </div>
  );
}
//npx json-server db.json server
//make styles in scss file

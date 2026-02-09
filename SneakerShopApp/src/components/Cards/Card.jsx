import { useContext } from "react";
import { AppContext } from "../../context";

export function Cards() {
  const context = useContext(AppContext);
  console.log(context);

  const cardStyle = {
    maxHeight: "200px",
    maxWidth: "100px",
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {context ? (
        context.map((item) => (
          <div style={cardStyle} className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={item.imageUrl}
                  />
                  <span className="card-title">{item.title}</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light red">
                    <i className="material-icons">add</i>
                  </a>
                </div>
                <div className="card-content">
                  <p>{item.price}</p>
                </div>
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

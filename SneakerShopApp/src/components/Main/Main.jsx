export const Main = () => {
  return (
    <main>
      <h3>Все кроссовки</h3>
      <div className="cardsContainer">
        <div className="cardWrapper">
          <div className="card">
            <div className="top">
              <div className="likeBtn"></div>
            </div>
            <div className="center">
              <p>title</p>
            </div>
            <div className="bottom">price:</div>
          </div>
        </div>
      </div>
    </main>
  );
};

import "./styles.css";

const Jumbotron = ({ item }) => {
  return (
    <div className="jumbo_wrapper">
      <div
        className={
          item.direction === "row" ? "jumbo container" : "jumbo container rev"
        }
      >
        <div className="jum">
          <h1 className="hero">{item.title}</h1>
          <h3 className="typography">{item.subTitle}</h3>
        </div>
        <img
          src={item.image}
          alt="aono"
          className={item.id === 2 && "sec_img"}
        />
      </div>
    </div>
  );
};

export default Jumbotron;

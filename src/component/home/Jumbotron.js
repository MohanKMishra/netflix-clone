import "./styles.css";
import img from "../../assets/images/misc/home-imac.jpg";

const Jumbotron = ({ item }) => {
  // console.log(img);
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
          // src={`${item.image}`}
          src={img}
          alt={item.alt}
          className={item.id === 2 && "sec_img"}
        />
      </div>
    </div>
  );
};

export default Jumbotron;

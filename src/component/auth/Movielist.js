import React from "react";
import "./Movielist.css";
import svg from "../../logo.svg";
import img from "../../assets/images/films/children/despicable-me/large.jpg";
import img1 from "../../assets/images/films/drama/fight-club/large.jpg";
import img2 from "../../assets/images/films/drama/kings-speech/large.jpg";
import img3 from "../../assets/images/films/drama/the-prestige/large.jpg";
import img4 from "../../assets/images/films/drama/the-revenant/large.jpg";
import img5 from "../../assets/images/films/drama/the-social-network/large.jpg";
import img6 from "../../assets/images/films/romance/a-star-is-born/large.jpg";
import img7 from "../../assets/images/series/crime/long-shot/large.jpg";
import img8 from "../../assets/images/films/children/frozen/large.jpg";
import img9 from "../../assets/images/films/children/hotel-transylvania/large.jpg";
import img10 from "../../assets/images/films/children/spirited-away/large.jpg";
import img11 from "../../assets/images/films/children/up/large.jpg";
import img12 from "../../assets/images/films/romance/blue-valentine/large.jpg";
import img13 from "../../assets/images/films/romance/la-la-land/large.jpg";
import img14 from "../../assets/images/films/romance/the-notebook/large.jpg";
import img15 from "../../assets/images/films/romance/titanic/large.jpg";
import img16 from "../../assets/images/films/suspense/gone-girl/large.jpg";
import img17 from "../../assets/images/films/suspense/prisoners/large.jpg";
import img18 from "../../assets/images/films/suspense/seven/large.jpg";
import img19 from "../../assets/images/films/suspense/shutter-island/large.jpg";
import img20 from "../../assets/images/films/suspense/zodiac/large.jpg";
import img21 from "../../assets/images/films/thriller/a-quiet-place/large.jpg";
const Movielist = () => {
  return (
    <>
      <div className="bg">
        <div className="navbar">
          <div>
            <img src={svg} alt="NETFLIX" className="logo" />
          </div>
          <div className="option">
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Recently Added</li>
            <li>My List</li>
          </div>
        </div>
        <h1 className="caption">MONEY HEIST</h1>

        <div className="play">
          <i className="far fa-play"></i>
          <p>Play</p>
        </div>
        <div className="list">
          <i className="fal fa-plus"></i>
          <p>My List</p>
        </div>
        <div className="movie_info">
          <h4>Watch Part 3 Now</h4>
          <p>
            With millions of euros and their lives on the line, nine robbers
            attempt to pull off the greatest heist of all time
          </p>
        </div>
      </div>
      <div className="movie_pic">
        <div>
          <div className="row_caption">New Release</div>
          {/* <marquee> */}
          <img src={img} alt="not found" className="zoom" />
          <img src={img1} alt="not found" className="zoom" />
          <img src={img2} alt="not found" className="zoom" />
          <img src={img3} alt="not found" className="zoom" />
          <img src={img4} alt="not found" className="zoom" />
          <img src={img5} alt="not found" className="zoom" />
          <img src={img6} alt="not found" className="zoom" />
          <img src={img7} alt="not found" className="zoom" />
        </div>
        <div>
          <div className="row_caption">Continue Watching</div>
          <img src={img9} alt="not found" className="zoom" />
          <img src={img10} alt="not found" className="zoom" />
          <img src={img11} alt="not found" className="zoom" />
          <img src={img12} alt="not found" className="zoom" />
          <img src={img13} alt="not found" className="zoom" />
          <img src={img14} alt="not found" className="zoom" />
          <img src={img15} alt="not found" className="zoom" />
          <img src={img16} alt="not found" className="zoom" />
        </div>
        <div>
          <div className="row_caption">Trading Now</div>
          <img src={img17} alt="not found" className="zoom" />
          <img src={img18} alt="not found" className="zoom" />
          <img src={img19} alt="not found" className="zoom" />
          <img src={img20} alt="not found" className="zoom" />
          <img src={img21} alt="not found" className="zoom" />
        </div>

        {/* </marquee> */}
      </div>
      {/* </div> */}
    </>
  );
};
export default Movielist;

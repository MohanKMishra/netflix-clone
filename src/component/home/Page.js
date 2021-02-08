import React from "react";
// import img from "../../data/page.jpg";
import Jumbo from "../../fixtures/jumbo.json";
import Jumbotron from "./Jumbotron";

const page = () => {
  console.log(Jumbo);

  return (
    <>
      <div className="add">
        {Jumbo.map((e) => {
          return <Jumbotron item={e} key={e.id} />;
        })}
      </div>
    </>
  );
};

export default page;

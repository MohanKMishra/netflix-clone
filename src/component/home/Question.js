import React, { useEffect, useState } from "react";
import data from "../../fixtures/faq.json";
import Registration from "./Registration";

const Question = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    console.log("RENDER");
  }, []);
  return (
    <>
      <div className="box">
        <div className="container">
          <h4>Frequently Asked questions</h4>
        </div>
        <div className="questions">
          {data.map((s) => (
            <Btn s={s} key={s.id} active={active} setActive={setActive} />
          ))}
        </div>
        <Registration />
      </div>
    </>
  );
};

export default Question;

export const Btn = ({ s, active, setActive }) => {
  useEffect(() => {
    console.log("1 RENDER");
  });
  return (
    <>
      <div className="faq">
        <div
          className="text"
          onClick={() => setActive(active === s.id ? 0 : s.id)}
        >
          <h2 className=" header">{s.header}</h2>
          <div className="symbol">{active === s.id ? "x" : "+"}</div>
        </div>
        {active === s.id && <p className="paragraph">{s.body}</p>}
      </div>
    </>
  );
};

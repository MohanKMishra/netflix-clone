import React from "react";
import data from "../../fixtures/footer.json";
const Footer = () => {
  console.log(data);
  return (
    <>
      <div className="footer">
        <div className=" container">
          <h3>Questions? Call 000-800-040-1843</h3>
          <div className="row">
            {data.map((e, i) => {
              return (
                <div key={i} className="column">
                  {/* {e.map((e) => (
                <div className="footer_name" key={e.id}> */}
                  {e.name}
                </div>
                // ))}
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

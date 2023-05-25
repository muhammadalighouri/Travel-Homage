import React from "react";
import "../scss/wholesale.scss";
const WholeSale = ({ reverse, img, heading, description, list }) => {
  return (
    <>
      <section id="wholesale">
        <div className="container">
          <div
            className="img"
            data-aos="fade-up"
            style={reverse ? { order: "2" } : {}}
          >
            <img src={img} alt="" />
          </div>
          <div className="content">
            <h2 data-aos="fade-up">{heading}</h2>
            <p data-aos="fade-up">{description}</p>
            {list && (
              <ul data-aos="fade-up">
                {list.map((i) => {
                  return <li >{i}</li>;
                })}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default WholeSale;

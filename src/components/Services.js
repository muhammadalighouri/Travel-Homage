import React from "react";
import "../scss/services.scss";
const Services = ({
  mainImg,
  heading,
  span,
  img,
  des,
  order,
  end,
  top,
  bold,
  con,
  reverse,
  id
}) => {
  return (
    <>
      <section id={id}
        className="service-box"
        style={order ? { gridTemplateColumns: "  1fr 1fr" } : {}}
      >
        <div
          id="img"
          style={order ? { order: "2" } : {}}
          className={top ? "top" : {}}
        >
          <img src={mainImg} alt="" style={top ? { zIndex: "1" } : {}} />
        </div>
        <div className="content">
          <div className="heading">
            <h1 style={bold ? {} : {}} className={reverse ? "reverse" : ""}>
              {heading}
              <span>{span}</span>
            </h1>
            {con && <img className="i" src={img} alt="" />}
          </div>
          <div className="para">
            <p style={end ? { textAlign: "end" } : {}}>{des}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

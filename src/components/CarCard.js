import React from "react";

const CarCard = ({ i, text }) => {
  return (
    <>
      <div className="box">
        <div className="content">
          <div className="heading">
            <div className="main">
              <h1>
                <img src={i.star} alt="" />
                {i.h}
              </h1>
              <p>{i.para}</p>
            </div>
            <div className="h-btn">
              <a href="#">{i.btn}</a>
            </div>
          </div>
          <div className="para">
            <ul className="bold">
              <li>{i.li1}</li>
              <li>{i.li2}</li>
              <li>{i.li3}</li>
              <li>{i.li4}</li>
              <li>{i.li5}</li>
              <li>{i.li6}</li>
            </ul>
            <ul className="light">
              <li>{i.p1}</li>
              <li>{i.p2}</li>
              <li>{i.p3}</li>
              <li>{i.p4}</li>
              <li>{i.p5}</li>
              <li>{i.p6}</li>
            </ul>
          </div>
        </div>
        <div className="img-box">
          <div className="img-wrapper">
            <img src={i.img} alt="" />
            <div className="btn">
              <a href="#">{text}</a>
            </div>
            <div className="wrap-vector">
              <div className="vector">
                <img src={i.vi1} alt="" />
                <img src={i.vi2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarCard;

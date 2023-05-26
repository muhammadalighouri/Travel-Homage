import React from "react";
import star from "../assests/Fleet/Frame 199.png";
import v1 from "../assests/Fleet/Vector (3).png";
import v2 from "../assests/Fleet/Vector (4).png";
import v3 from "../assests/Fleet/Vector (5).png";
import v4 from "../assests/Fleet/Group (2).png";
import '../scss/navigate.scss'
const Navigate = () => {
  return (
    <>
      <section id="navigate">
        <div className="container">
          <div className="content">
            <div className="heading">
              <h1>لكزس E250</h1>
              <span className="year">2023</span>
            </div>
            <div className="para">
                <p>Lorem ipsum dolor sit amet, consectetuer </p>
                <img src={star} alt="" />
            </div>
            <div className="icons">
                <li>

                    
                    <img src={v1} alt="" />
                    <span>M</span>
                </li>
                <li>

                    
                    <img src={v2} alt="" />
                    <span>4</span>
                </li>
                <li>

                    
                    <img src={v3} alt="" />
                    <span>4</span>
                </li>
                <li>

                    
                    <img src={v4} alt="" />
                    <span>4-5</span>
                </li>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navigate;

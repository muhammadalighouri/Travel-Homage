import React from "react";
import "../scss/fleetside.scss";
import car1 from "../assests/Fleet/car1.png";
import car2 from "../assests/Fleet/car2.png";
import car3 from "../assests/Fleet/car3.png";
import car5 from "../assests/Fleet/car4.png";
import car6 from "../assests/Fleet/car5.png";
import tick from "../assests/Fleet/tick.png";
const FleetSide = () => {
  return (
    <>
      <div id="fleet-side">
        <aside>
          <div className="wrap-categories">
            <div className="heading">
              <span>إعادة ضبط</span>

              <h3>الفئات</h3>
            </div>
            <div className="categories">
              <div className="head">
                <div className="select-h">
                  <ul className="number">
                    <li>10</li>
                  </ul>
                  <div className="text"> جميع الفئات</div>
                  <div className="check">
                    <p>
                      <img src={tick} alt="" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="select">
                <ul className="number">
                  <li>5</li>
                  <li>5</li>
                  <li>5</li>
                  <li>5</li>
                  <li>5</li>
                </ul>

                <ul className="text">
                  <li>
                    <div className="h"> اقتصادي</div>
                    <div className="car">
                      <img src={car1} alt="" />
                    </div>
                    <div className="check">
                      <p></p>
                    </div>
                  </li>
                  <li>
                    <div className="h">سيدان</div>
                    <div className="car">
                      <img src={car2} alt="" />
                    </div>
                    <div className="check">
                      <p></p>
                    </div>
                  </li>
                  <li>
                    <div className="h"> الدفع الرباعي</div>
                    <div className="car">
                      <img src={car3} alt="" />
                    </div>
                    <div className="check">
                      <p></p>
                    </div>
                  </li>
                  <li>
                    <div className="h"> عائلية</div>
                    <div className="car">
                      <img src={car5} alt="" />
                    </div>
                    <div className="check">
                      <p></p>
                    </div>
                  </li>
                  <li>
                    <div className="h"> رفاهية</div>
                    <div className="car">
                      <img src={car6} alt="" />
                    </div>
                    <div className="check">
                      <p></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="avalible-1">
            <h3 className="h">التوفر</h3>
            <div className="para">
            <p>إعادة ضبط</p> <p>مختاره <span>0</span></p>{" "}

            </div>
            <div className="select">
              <ul className="number">
                <li>5</li>
                <li style={{ color: "#AFAFAF" }}>0</li>
              </ul>
              <ul className="text">
                <li>
                  <div className="h"> رفاهية</div>
                  <div className="check">
                    <p></p>
                  </div>
                </li>
                <li>
                  <div className="h" style={{ color: "#AFAFAF" }}>
                    {" "}
                    غير متاح
                  </div>
                  <div className="check">
                    <p style={{ background: "#AFAFAF" }}></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="avalible-1">
            <h3 className="h">الخصم</h3>
            <div className="para">
            <p>إعادة ضبط</p> <p>مختاره <span>0</span></p>{" "}

            </div>
            <div className="select">
              <ul className="number">
                <li>5</li>
              </ul>
              <ul className="text">
                <li>
                  <div className="h"> ترافيل بلص</div>
                  <div className="check">
                    <p></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="avalible-1">
            <h3 className="h">الماركة</h3>
            <div className="para">
            <p>إعادة ضبط</p> <p>مختاره <span>0</span></p>{" "}

            </div>
            <div className="select">
              <ul className="number">
                <li>5</li>
              </ul>
              <ul className="text">
                <li>
                  <div className="h"> لكزس</div>
                  <div className="check">
                    <p></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="avalible-1">
            <h3 className="h">السعر</h3>
            <div className="para">
              <p>إعادة ضبط</p> <p>مختاره <span>100</span></p>{" "}
            </div>
            <div className="select">
              <ul className="number">
                <li>5</li>
              </ul>
              <ul className="text">
                <li>
                  <div className="h"> لكزس</div>
                  <div className="check">
                    <p></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="avalible-1">
            <h3 className="h">السنة</h3>
            <div className="para">
            <p>إعادة ضبط</p> <p>مختاره <span>0</span></p>{" "}

            </div>
            <div className="select">
              <ul className="number">
                <li>5</li>
                <li>5</li>
                <li>5</li>
                <li>5</li>
              </ul>
              <ul className="text">
                <li>
                  <div className="h"> 2020</div>
                  <div className="check">
                    <p></p>
                  </div>
                </li>
                <li>
                  <div className="h"> 2021</div>
                  <div className="check">
                    <p></p>
                  </div>
                </li>
                <li>
                  <div className="h"> 2022</div>
                  <div className="check">
                    <p></p>
                  </div>
                </li>
                <li>
                  <div className="h"> 2023</div>
                  <div className="check">
                    <p></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default FleetSide;

import React from "react";
import "../scss/fleetside.scss";
import car1 from "../assests/Fleet/car1.png";
import car2 from "../assests/Fleet/car2.png";
import car3 from "../assests/Fleet/car3.png";
import car5 from "../assests/Fleet/car4.png";
import car6 from "../assests/Fleet/car5.png";
import tick from "../assests/Fleet/tick.png";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux"
const FleetSide = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { filters } = useSelector(state => state.Filters);
  const { categories, brands, availabilityCount } = filters
  console.log(categories);
  return (
    <>
      <div id="fleet-side">
        <aside>
          {/* <div className="wrap-categories">
            <div className="heading">
              <span>إعادة ضبط</span>

              <h3>الفئات</h3>
            </div>
            <div className="categories">

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
                      <p>
                        <input type="checkbox" name="" id="" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="h">سيدان</div>
                    <div className="car">
                      <img src={car2} alt="" />
                    </div>
                    <div className="check">
                      <p>
                        <input type="checkbox" name="" id="" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="h"> الدفع الرباعي</div>
                    <div className="car">
                      <img src={car3} alt="" />
                    </div>
                    <div className="check">
                      <p>
                        <input type="checkbox" name="" id="" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="h"> عائلية</div>
                    <div className="car">
                      <img src={car5} alt="" />
                    </div>
                    <div className="check">
                      <p>
                        <input type="checkbox" name="" id="" />
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="h"> رفاهية</div>
                    <div className="car">
                      <img src={car6} alt="" />
                    </div>
                    <div className="check">
                      <p>
                        <input type="checkbox" name="" id="" />
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          {
            categories && <div className="item__">
              <div className="name">
                {categories?.name}
              </div>
              <div className="tools">
                <div className="first">Reset</div>
                <div className="second">0 Selected</div>
              </div>
              <ul>
                {
                  categories.data.map((ite, ind) => {
                    return (
                      <li>
                        <div className="start">{ite.count}</div>
                        <div className="end">
                          <div className="h">{ite._id}</div>
                          <input type="checkbox" name="" id="" />
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          }
          {
            brands && <div className="item__">
              <div className="name">
                {brands?.name}
              </div>
              <div className="tools">
                <div className="first">Reset</div>
                <div className="second">0 Selected</div>
              </div>
              <ul>
                {
                  brands.data.map((ite, ind) => {
                    return (
                      <li>
                        <div className="start">{ite.count}</div>
                        <div className="end">
                          <div className="h">{ite._id}</div>
                          <input type="checkbox" name="" id="" />
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          }
          {
            availabilityCount && <div className="item__">
              <div className="name">
                {availabilityCount?.name}
              </div>
              <div className="tools">
                <div className="first">Reset</div>
                <div className="second">0 Selected</div>
              </div>
              <ul>
                <li>
                  <div className="start">InStock</div>
                  <div className="end">
                    <div className="h">{availabilityCount.data.available}</div>
                    <input type="checkbox" name="" id="" />
                  </div>
                </li>

                <li>
                  <div className="start">Out Of Stock</div>
                  <div className="end">
                    <div className="h">{availabilityCount.data.unavailable}</div>
                    <input type="checkbox" name="" id="" />
                  </div>
                </li>

              </ul>
            </div>
          }

        </aside>
      </div>
    </>
  );
};

export default FleetSide;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "../scss/fleetside.scss";
import { useSelector } from "react-redux";
import suv from "../assests/cars/SUV (2).png"
import sedan from "../assests/cars/sedan (2).png"
import luxury from "../assests/cars/luxury (2).png"
import family from "../assests/cars/faamily.png"
import economy from "../assests/cars/economy.png"
import { fetchCars } from "../Redux/actions/carActions";
const FleetSide = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { filters } = useSelector((state) => state.Filters);
  const { categories, brands, availabilityCount, priceRange } = filters;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [value, setValue] = useState({ min: 0, max: 1500 });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchCars(
        selectedCategories.join(","),
        selectedBrands.join(","),
        "",
        "",
        "",
        value.min,
        value.max,
        "",
        "",
        "",
        "",
        selectedAvailability.includes("InStock") ? "true" : "",
        selectedAvailability.includes("OutOfStock") ? "true" : "",
        1
      )
    );
  }, [selectedCategories, selectedBrands, selectedAvailability, value]);

  const getCategoryIcon = (cat) => {
    if (cat === "SUV") {
      return suv;
    }
    if (cat === "Luxury") {
      return luxury;
    }
    if (cat === "Sedan") {
      return sedan;
    }
    if (cat === "Economy") {
      return economy;
    }
    if (cat === "Family") {
      return family;
    }
  };
  return (
    <>
      <div id="fleet-side">
        <aside>
          {categories && (
            <div className="item__">
              <div className="name">{categories?.name}</div>
              <div className="tools">
                <div className="first">Reset</div>
                <div className="second">0 Selected</div>
              </div>
              <ul>
                {categories.data.map((ite, ind) => {
                  return (
                    <li>
                      <div className="start">{ite.count}</div>
                      <div className="end">
                        <div className="h">{ite._id}</div>
                        <div className="img">
                          <img src={getCategoryIcon(ite._id)} alt="" />
                        </div>
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedCategories([
                                ...selectedCategories,
                                ite._id,
                              ]);
                            } else {
                              setSelectedCategories(
                                selectedCategories.filter(
                                  (id) => id !== ite._id
                                )
                              );
                            }
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {brands && (
            <div className="item__">
              <div className="name">{brands?.name}</div>
              <div className="tools">
                <div className="first">Reset</div>
                <div className="second">0 Selected</div>
              </div>
              <ul>
                {brands.data.map((ite, ind) => {
                  return (
                    <li>
                      <div className="start">{ite.count}</div>
                      <div className="end">
                        <div className="h">{ite._id}</div>
                        <input
                          type="checkbox"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedBrands([...selectedBrands, ite._id]);
                            } else {
                              setSelectedBrands(
                                selectedBrands.filter((id) => id !== ite._id)
                              );
                            }
                          }}
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {availabilityCount && (
            <div className="item__">
              <div className="name">{availabilityCount?.name}</div>
              <div className="tools">
                <div className="first">Reset</div>
                <div className="second">0 Selected</div>
              </div>
              <ul>
                <li>
                  <div className="start">InStock</div>
                  <div className="end">
                    <div className="h">{availabilityCount.data.available}</div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedAvailability([
                            ...selectedAvailability,
                            "InStock",
                          ]);
                        } else {
                          setSelectedAvailability(
                            selectedAvailability.filter(
                              (id) => id !== "InStock"
                            )
                          );
                        }
                      }}
                    />
                  </div>
                </li>
                <li>
                  <div className="start">Out Of Stock</div>
                  <div className="end">
                    <div className="h">
                      {availabilityCount.data.unavailable}
                    </div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedAvailability([
                            ...selectedAvailability,
                            "OutOfStock",
                          ]);
                        } else {
                          setSelectedAvailability(
                            selectedAvailability.filter(
                              (id) => id !== "OutOfStock"
                            )
                          );
                        }
                      }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          )}
          {priceRange && (
            <div className="item__" style={{ padding: "10px 15px 40px" }}>
              <div className="name">{priceRange?.name}</div>

              <ul>
                <li style={{ marginTop: "20px" }}>
                  {/* <InputRange
                    maxValue={priceRange.data.max}
                    minValue={priceRange.data.min}
                    value={value}
                    onChange={(value) => setValue(value)}
                  /> */}
                </li>
              </ul>
            </div>
          )}
        </aside>
      </div>
    </>
  );
};

export default FleetSide;

import React, { useState, useEffect } from "react";
import btn from "../assests/Fleet/Button.png";
import c1 from "../assests/Fleet/Car Photo1.png";
import icons from "../assests/Fleet/Icons.png";
import bi from "../assests/Fleet/Badge.png";
import Vector from "../assests/Fleet/Vector1.png";
import top from "../assests/Fleet/top-left.png";
import bottom from "../assests/Fleet/bottom-right.jpeg";
import s1 from "../assests/Fleet/span1.png";
import green from "../assests/green.png";
import s2 from "../assests/Fleet/span2.png";
import s3 from "../assests/Fleet/span3.png";
import s4 from "../assests/Fleet/span4.png";
import f4 from "../assests/Fleet/i.11.png";
import f5 from "../assests/Fleet/i.22.png";
import suv from "../assests/cars/SUV (2).png";
import sedan from "../assests/cars/sedan (2).png";
import luxury from "../assests/cars/luxury (2).png";
import family from "../assests/cars/faamily.png";
import economy from "../assests/cars/economy.png";
import "../scss/card.scss";
import { useDispatch, useSelector } from "react-redux";
import Navigate from "./Navigate";
import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from "../Redux/actions/favouriteActions";
import { toast } from "react-toastify";
import { fetchCars, toggleAction } from "../Redux/actions/carActions";
import filter from "../assests/filter.png";
const CarD = ({ display }) => {
  const { cars, loading } = useSelector((state) => state.Cars) || {};
  const info = useSelector((state) => state.RentalInfo?.selectedOption);
  const { user } = useSelector((state) => state.UserLogin?.userInfo) || {};
  // State to hold the selected car's data
  const [selectedCar, setSelectedCar] = useState(null);
  const [favoriteCars, setFavoriteCars] = useState(null);
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.toggle);
  const handleShowFavorites = () => {};
  useEffect(() => {
    dispatch(fetchCars());
  }, [toggle]);

  const carsToRender = favoriteCars || cars;
  // Function to handle when a car card is clicked
  const cardDetails = (car) => {
    setSelectedCar(car);
  };
  const closeModal = () => {
    setSelectedCar(null);
  };
  // Function to calculate price after discount
  const priceAfterDiscount = (price, discount) => {
    return price - (price * discount) / 100;
  };
  // Function to handle adding a car to favorites
  const handleAddFavorite = (carId) => {
    // Assuming you have access to the userId, you can pass it here
    if (user?._id) {
      dispatch(addFavorite(user._id, carId)).then(() => {
        dispatch(fetchCars());
      });
      toast.success("Added to your favourites");
    } else {
      toast.error("You need to Login your account");
    }
  };
  const handleFavorite = (carId) => {
    // Assuming you have access to the userId, you can pass it here
    if (user?._id) {
      dispatch(toggleAction());
    } else {
      toast.error("You need to Login your account");
    }
  };

  // Function to handle removing a car from favorites
  const handleRemoveFavorite = (carId) => {
    // Assuming you have access to the userId, you can pass it here
    dispatch(removeFavorite(user._id, carId)).then(() => {
      dispatch(fetchCars());
      toast.success("Removed from your favourites");
    });
  };

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
      <div>
        <div className="btns">
          <div className="impression" >
            <div
              className={toggle ? "btn__active btn" : "btn"}
              onClick={handleFavorite}
            >
              {toggle ? "عرض المفضل" : "عرض المفضل"}

              <img src={!toggle ? f5 : green} alt="" />
            </div>
          </div>
    
        </div>
        <div className="flex">
          {loading ? (
            <>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </>
          ) : (
            <>
              {carsToRender.map((car) => {
                return (
                  <>
                    <div className="box">
                      <div
                        className="wrapper-main"
                        onClick={() => cardDetails(car)}
                      >
                        <div className="top-h">
                          <div className="start">
                            <span>خصم {car.discount}%</span>
                          </div>
                          <div className="center">{car.type}</div>
                          <div className="end">
                            <img
                              src={getCategoryIcon(car.category)}
                              alt=""
                              className="vector"
                            />
                          </div>
                        </div>
                        <div className="bottom-h">
                          <div className="content">
                            <div className="heading-1">
                              <h1>{car.name}</h1>
                            </div>
                            <div className="year">
                              <span>{car.year}</span>
                              <div className="price">
                                <span className="n1">ر.س.</span>
                                <span className="n2">
                                  {" "}
                                  {info === "perDay"
                                    ? car?.pricePerDay
                                    : car?.pricePerHour}
                                </span>
                              </div>
                            </div>

                            <div className="layer">
                              <h2>
                                {priceAfterDiscount(
                                  info === "perDay"
                                    ? car?.pricePerDay
                                    : car?.pricePerHour,
                                  car?.discount
                                )}
                                <span className="l1">ر.س.*</span>
                              </h2>
                            </div>
                          </div>
                          <div className="wrap-img">
                            <img src={car?.image} alt="" className="main" />
                            <div className="icons">
                              <li>
                                <img src={s1} alt="" />
                                <span>{car?.maxPeople}</span>
                              </li>
                              <li>
                                <img src={s2} alt="" />
                                <span>{car?.bags}</span>
                              </li>
                              <li>
                                <img src={s3} alt="" />
                                <span>{car?.numDoors}</span>
                              </li>
                              <li>
                                <img src={s4} alt="" />
                                <span>{car?.engine}</span>
                              </li>
                            </div>
                            <div className="main-btn">
                              <span>احجز الآن</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="impression">
                        {/* Render the "Remove from Favorites" button for cars that are already favorited */}
                        {car.isFavorited ? (
                          <div
                            className=" btn__active"
                            onClick={() => handleRemoveFavorite(car._id)}
                          >
                            <img src={green} alt="" /> اضافة للمفضله
                          </div>
                        ) : (
                          <div
                            className="btn"
                            onClick={() => handleAddFavorite(car._id)}
                          >
                            <img src={f5} alt="" /> مفضل
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
              {selectedCar && (
                <Navigate closeModal={closeModal} car={selectedCar}  />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CarD;

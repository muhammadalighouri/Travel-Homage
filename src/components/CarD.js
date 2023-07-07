import React, { useState, useEffect } from "react";
import btn from "../assests/Fleet/Button.png";
import c1 from "../assests/Fleet/Car Photo1.png";
import icons from "../assests/Fleet/Icons.png";
import bi from "../assests/Fleet/Badge.png";
import Vector from "../assests/Fleet/Vector1.png";
import top from "../assests/Fleet/top-left.png";
import bottom from "../assests/Fleet/bottom-right.jpeg";
import s1 from "../assests/Fleet/span1.png";
import Skeleton from "@mui/material/Skeleton";

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
import { hideLoader, showLoader } from "../Redux/actions/loading";
import CarBox from "./CarBox";
const CarD = ({ display }) => {
  const { cars, loading } = useSelector((state) => state.Cars) || {};
  const info = useSelector((state) => state.RentalInfo?.selectedOption);
  const { user } = useSelector((state) => state.UserLogin?.userInfo) || {};
  // State to hold the selected car's data
  const [selectedCar, setSelectedCar] = useState(null);
  const [favoriteCars, setFavoriteCars] = useState(null);
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle.toggle);
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
    return (price - (price * discount) / 100);
  };
  // Function to handle adding a car to favorites
  const handleAddFavorite = (event, carId) => {
    dispatch(showLoader());
    event.stopPropagation();

    // Assuming you have access to the userId, you can pass it here
    if (user?._id) {
      dispatch(addFavorite(user._id, carId)).then(() => {
        dispatch(fetchCars());
      });
      toast.success("Added to your favourites");
    } else {
      toast.error("You need to Login your account");
    }
    dispatch(hideLoader());
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
  const handleRemoveFavorite = (event, carId) => {
    // Assuming you have access to the userId, you can pass it here
    dispatch(showLoader());
    event.stopPropagation();
    dispatch(removeFavorite(user._id, carId)).then(() => {
      dispatch(fetchCars());
      toast.success("Removed from your favourites");
    });
    dispatch(hideLoader());
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
          <div className="impression">
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
              {[1, 2, 3, 4, 5, 6].map((item, index) => {
                return (
                  <div className="box">
                    <Skeleton
                      style={{ borderRadius: "30px" }}
                      variant="rectangular"
                      width={291}
                      height={285}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {carsToRender.map((car, index) => {
                return (
                  <>
                    <CarBox
                      cardDetails={cardDetails}
                      car={car}
                      key={index}
                      getCategoryIcon={getCategoryIcon}
                      info={info}
                      priceAfterDiscount={priceAfterDiscount}
                      handleRemoveFavorite={handleRemoveFavorite}
                      handleAddFavorite={handleAddFavorite}
                      isFav={true}
                    />
                  </>
                );
              })}
              {selectedCar && (
                <Navigate closeModal={closeModal} car={selectedCar} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CarD;

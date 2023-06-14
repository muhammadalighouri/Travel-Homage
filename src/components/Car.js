import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../scss/styles.scss";
// import required modules
import { Navigation } from "swiper";
import "../scss/car.scss";
import img from "../assests/Group 938.png";
import img1 from "../assests/Car Card (1).png";
import img2 from "../assests/Car Card.png";
import suv from "../assests/cars/SUV (2).png";
import sedan from "../assests/cars/sedan (2).png";
import luxury from "../assests/cars/luxury (2).png";
import family from "../assests/cars/faamily.png";
import economy from "../assests/cars/economy.png";
import Controls from "../components/Controls";
import { useDispatch, useSelector } from "react-redux";
import CarBox from "./CarBox";
import { fetchCars } from "../Redux/actions/carActions";
import Navigate from "./Navigate";
const Car = () => {
  const [slide, setSlide] = useState(2);
  const [selectedCar, setSelectedCar] = useState(null);
  const { cars, loading } = useSelector((state) => state.Cars) || {};
  const info = useSelector((state) => state.RentalInfo?.selectedOption);
  const dispatch = useDispatch()
  // Function to handle when a car card is clicked
  const cardDetails = (car) => {
    setSelectedCar(car);
  };
  const closeModal = () => {
    setSelectedCar(null);
  };
  const priceAfterDiscount = (price, discount) => {
    return price - (price * discount) / 100;
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
  window.addEventListener("scroll", () => {
    if (window.innerWidth > 786) {
      setSlide(2);
    }
    if (window.innerWidth < 786) {
      setSlide(1);
    }
  });
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <>
      <section id="car">
        <Controls />

        <div className="container">
          <div className="img">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={slide}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              {
                cars.map((car, index) => {
                  return (
                    <SwiperSlide>
                      {" "}
                      <CarBox
                        key={index}
                        cardDetails={cardDetails}
                        car={car}
                        getCategoryIcon={getCategoryIcon}
                        info={info}
                        priceAfterDiscount={priceAfterDiscount}

                        isFav={false}
                      />

                    </SwiperSlide>
                  )
                })
              }


            </Swiper>
          </div>
          <div className="content">
            <div className="icon">
              <img src={img} alt="" />
            </div>
            <div className="heading">
              <h1>سيارات جديدة</h1>
              <h2>انضمت إلى الأسطول</h2>
            </div>
            <div className="btn">
              <Link to={"/fleet"}>استكشف جميع السيارات</Link>
            </div>
          </div>
        </div>
        {selectedCar && (
          <Navigate closeModal={closeModal} car={selectedCar} />
        )}
      </section>
    </>
  );
};

export default Car;

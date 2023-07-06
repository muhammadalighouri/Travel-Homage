import React from "react";
import f5 from "../assests/Fleet/i.22.png";
import green from "../assests/green.png";
import { useSelector } from "react-redux";
const CarBox = ({
    cardDetails,
    car,
    getCategoryIcon,
    info,
    priceAfterDiscount,
    handleRemoveFavorite,
    handleAddFavorite,
    isFav,
}) => {
    const currency = useSelector((state) => state.Currency.baseCurrency) || {};
    console.log(
        priceAfterDiscount(
            info === "perDay"
                ? car?.pricePerDay.toFixed(2)
                : car?.pricePerHour.toFixed(2),
            car?.pricePerHour.toFixed(2)
        )
    );
    console.log();
    return (
        <div className="box">
            <div className="wrapper-main" onClick={() => cardDetails(car)}>
                <div className="top-h">
                    <div className="start">
                        <span>خصم {car.discount}%</span>
                    </div>
                    <div className="center">{car.category}</div>
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
                                <span className="n1">{currency}</span>
                                <span className="n2">
                                    {" "}
                                    {info === "perDay"
                                        ? car?.pricePerDay.toFixed(2) // Displaying two decimal places for pricePerDay
                                        : car?.pricePerHour.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        <div className="layer">
                            {info === "perDay" ? (
                                <h2>
                                    {priceAfterDiscount(
                                        car?.pricePerDay.toFixed(2),

                                        car?.discount.toFixed(2)
                                    ).toFixed(2)}{" "}
                                    <span>{currency}/Day</span>
                                </h2>
                            ) : (
                                <span>
                                    {priceAfterDiscount(
                                        car?.pricePerHour.toFixed(2),

                                        car?.discount.toFixed(2)
                                    )}{" "}
                                    <b>{currency}/Hour</b>
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="wrap-img">
                        <img src={car?.image?.url} alt="" className="main" />
                    </div>
                </div>
                {isFav && (
                    <div className="impression">
                        {/* Render the "Remove from Favorites" button for cars that are already favorited */}
                        {car.isFavorited ? (
                            <div
                                className=" btn__active"
                                onClick={(e) => handleRemoveFavorite(e, car._id)}
                            >
                                <img src={green} alt="" /> اضافة للمفضله
                            </div>
                        ) : (
                            <div
                                className="btn"
                                onClick={(e) => handleAddFavorite(e, car._id)}
                            >
                                <img src={f5} alt="" /> مفضل
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CarBox;

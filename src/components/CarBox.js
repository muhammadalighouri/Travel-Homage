import React from 'react'
import f5 from "../assests/Fleet/i.22.png";
import green from "../assests/green.png";
const CarBox = ({ cardDetails, car, getCategoryIcon, info, priceAfterDiscount, handleRemoveFavorite, handleAddFavorite, isFav }) => {
    return (
        <div className="box">
            <div
                className="wrapper-main"
                onClick={() => cardDetails(car)}
            >
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
                        <img src={car?.image?.url} alt="" className="main" />
                        {/* <div className="icons">
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
                            </div> */}

                        {/* <div className="main-btn">
                            <span>احجز الآن</span>
                        </div> */}
                    </div>
                </div>
                {
                    isFav && <div className="impression">
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
                }
            </div>
        </div>
    )
}

export default CarBox

import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "../scss/bookingf.scss";
import icon1 from "../assests/Profile/loader.png";
import icon2 from "../assests/Profile/ban.png";
import icon3 from "../assests/Profile/forward-fast.png";
import icon4 from "../assests/Profile/square-check.png";
import star from "../assests/Profile/Frame 254.png";
import car1 from "../assests/Profile/car1.png";
import car2 from "../assests/Profile/carr2.png";
import car3 from "../assests/Profile/car3.png";
import v1 from "../assests/Profile/Vector (1).png";
import v2 from "../assests/Profile/Vector.png";
import CarCard from "./CarCard";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify"
import axios from "../api/axios"
import { getUserBookings } from "../Redux/actions/bookingActions";
const BookingF = () => {
  const [activeButton, setActiveButton] = useState("الغيت");
  const [activeTab, setactiveTab] = useState("Running")
  // const [activeButton, setActiveButton] = useState('جارية')
  const bookings = useSelector((state) => state.Bookings.bookingsByStatus);
  const { processing, running, completed, cancelled, confirmed } = bookings || {};
  const { loading } = useSelector((state) => state.Bookings) || {};
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const btns = [
    // { h: "جارية", icon: icon2 },
    { h: "أكتملت", icon: icon3 },
    // { h: "قادمة", icon: icon4 },
    { h: "الغيت", icon: icon1 },
  ];
  const contractBtns = [
    { h: "Running", icon: icon1 },
    { h: "Completed", icon: icon1 },
    { h: "Cancelled", icon: icon1 },
  ];
  const handleRowClick = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
    console.log(booking);
  };
  const cancelBooking = async (id) => {
    await axios
      .post(`/api/v1/booking/cancel/${id}`)
      .then((res) => {
        toast.success("success");
        setShowModal(false);
      })
      .catch((error) => {
        toast.error(error);
        setShowModal(false);
      });
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserBookings());
  }, []);

  return (
    <>
      <div className="container-main">
        <ul className="top-btns">
          {btns.map((a) => {
            return (
              <>
                <li
                  onClick={() => setActiveButton(a.h)}
                  className={activeButton === a.h ? "active" : ""}
                >
                  {a.h}
                  <img src={a.icon} alt="" />
                </li>
              </>
            );
          })}
        </ul>
        <div className="product">
          {activeButton === "الغيت" && (
            <>
              {
                loading ? <h1 style={{ fontSize: "3rem", color: 'black' }}>Loading......</h1> : <div className="booking__grid__">
                  {
                    confirmed?.map((i) => {
                      return (
                        <>
                          <CarCard handleRowClick={handleRowClick} type={"confirmed"} i={i} text={""} />
                        </>
                      );
                    })
                  }
                  {processing && processing.length > 0 ? (
                    processing.map((i) => {
                      return (
                        <>
                          <CarCard type={"processing"} handleRowClick={handleRowClick} i={i} text={""} />
                        </>
                      );
                    })
                  ) : (
                    <>
                      <div
                        style={{
                          display: "grid",
                          placeItems: "center",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        <h2 style={{ color: "black" }}>No bookings found</h2>
                      </div>
                    </>
                  )}
                </div>

              }
            </>
          )}

          {activeButton === "أكتملت" && (
            <>
              <div className="btns__">
                {contractBtns.map((a) => {
                  return (
                    <>
                      <li
                        onClick={() => setactiveTab(a.h)}
                        className={activeTab === a.h ? "active" : ""}
                      >
                        {a.h}
                      </li>
                    </>
                  );
                })}
              </div>
              <div className="booking__grid__">
                {
                  activeTab === "Running" && <>
                    {running && running.length > 0 ? (
                      running.map((i) => {
                        return (
                          <>
                            <CarCard handleRowClick={handleRowClick} type={"running"} i={i} text={""} />
                          </>
                        );
                      })
                    ) : (
                      <>
                        <div
                          style={{
                            display: "grid",
                            placeItems: "center",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          <h2 style={{ color: "black" }}>No bookings found</h2>
                        </div>
                      </>
                    )}
                  </>
                }
                {
                  activeTab === "Completed" && <>
                    {completed && completed.length > 0 ? (
                      completed.map((i) => {
                        return (
                          <>
                            <CarCard handleRowClick={handleRowClick} type={"completed"} i={i} text={""} />
                          </>
                        );
                      })
                    ) : (
                      <>
                        <div
                          style={{
                            display: "grid",
                            placeItems: "center",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          <h2 style={{ color: "black" }}>No bookings found</h2>
                        </div>
                      </>
                    )}
                  </>
                }
                {
                  activeTab === "Cancelled" && <>
                    {cancelled && cancelled.length > 0 ? (
                      cancelled.map((i) => {
                        return (
                          <>
                            <CarCard handleRowClick={handleRowClick} type={"cancelled"} i={i} text={""} />
                          </>
                        );
                      })
                    ) : (
                      <>
                        <div
                          style={{
                            display: "grid",
                            placeItems: "center",
                            alignItems: "center",
                            textAlign: "center",
                          }}
                        >
                          <h2 style={{ color: "black" }}>No bookings found</h2>
                        </div>
                      </>
                    )}
                  </>
                }
              </div>
            </>
          )}

        </div>
      </div>

      {selectedBooking && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Booking Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="booking__modal__"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "2rem",
              }}
            >
              <div>
                <Image
                  src={selectedBooking.car.image.url}
                  alt={selectedBooking.car.name}
                  thumbnail
                />
                <p>
                  <strong>Car:</strong> {selectedBooking.car.name}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {selectedBooking.car.description}
                </p>
                <p>
                  <strong>Type:</strong> {selectedBooking.car.type}
                </p>
                <p>
                  <strong>Brand:</strong> {selectedBooking.car.brand}
                </p>
                <p>
                  <strong>Engine:</strong> {selectedBooking.car.engine}
                </p>
                <p>
                  <strong>Max People:</strong> {selectedBooking.car.maxPeople}
                </p>
                <p>
                  <strong>Number of Doors:</strong>{" "}
                  {selectedBooking.car.numDoors}
                </p>
                <p>
                  <strong>Bags:</strong> {selectedBooking.car.bags}
                </p>
                <p>
                  <strong>Price Per Day:</strong>{" "}
                  {selectedBooking.car.pricePerDay}
                </p>
                <p>
                  <strong>Price Per Hour:</strong>{" "}
                  {selectedBooking.car.pricePerHour}
                </p>
              </div>
              <div>
                {/* Add more details as necessary */}
                <Image
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "100px",
                    marginBottom: "10px",
                  }}
                  src={selectedBooking.user.avatar.url}
                  alt={`${selectedBooking.user.firstName} ${selectedBooking.user.lastName}`}
                  thumbnail
                />
                <p>
                  <strong>User:</strong> {selectedBooking.user.firstName}{" "}
                  {selectedBooking.user.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {selectedBooking.user.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedBooking.user.phone}
                </p>
                <p>
                  <strong>Pickup Location:</strong>{" "}
                  {selectedBooking.pickupLocation}
                </p>
                <p>
                  <strong>Return Location:</strong>{" "}
                  {selectedBooking.returnLocation}
                </p>
                <p>
                  <strong>Start Date:</strong>{" "}
                  {new Date(selectedBooking.startDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>End Date:</strong>{" "}
                  {new Date(selectedBooking.endDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>Delivery:</strong>{" "}
                  {selectedBooking.delivery ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Addons:</strong> {selectedBooking.addons.join(", ")}
                </p>
                <p>
                  <strong>Total Price:</strong> {selectedBooking.totalPrice}
                </p>
                <p>
                  <strong>Ride Status:</strong> {selectedBooking.rideStatus}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {
              selectedBooking.rideStatus === 'processing' && <Button
                variant="danger"
                onClick={() => cancelBooking(selectedBooking._id)}
              >
                Cancel
              </Button>
            }
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default BookingF;

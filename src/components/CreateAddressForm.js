import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAddress } from "../Redux/actions/addressActions";
import { getAllAddresses } from "../Redux/actions/addressActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateAddressForm = () => {
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("")
    const dispatch = useDispatch();
    const creatingAddress = useSelector((state) => state.Address.creatingAddress);
    const { user } = useSelector((state) => state.UserLogin.userInfo);
    const { addresses } = useSelector((state) => state.Address);
    const navigate = useNavigate()
    const handleCreateAddress = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addressData = {
            street,
            city,
            state,
            zip,
            title, user: user._id
        };
        try {
            await dispatch(createAddress(addressData));


            dispatch(getAllAddresses());
            setShowModal(false);
            navigate('/')
            // Show success toast message only if address is created successfully
            toast.success("Address created successfully!");
        } catch (error) {
            // Handle error if needed
            toast.error(
                error.message || "Failed to create address. Please try again."
            );
        }
    };

    return (
        <div>
            {/* <h1>Create Address</h1> */}
            <button style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
                gap: '12px',
                cursor: 'pointer',
                padding: '15px',
                borderRadius: '20px',
                width: 'max-content',
                height: '50px',
                background: 'rgb(255, 205, 0)',
                color: 'black',
                marginLeft: 'auto'
            }} onClick={handleCreateAddress}>Create Address</button>

            {showModal && (
                <div
                    className="modal"
                    style={{
                        display: "block",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Create Address</h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={handleCloseModal}
                                >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="street">Title:</label>
                                        <input
                                            type="text"
                                            id="titlel"
                                            className="form-control"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="street">Street:</label>
                                        <input
                                            type="text"
                                            id="street"
                                            className="form-control"
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City:</label>
                                        <input
                                            type="text"
                                            id="city"
                                            className="form-control"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="state">State:</label>
                                        <input
                                            type="text"
                                            id="state"
                                            className="form-control"
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="zip">Zip:</label>
                                        <input
                                            type="text"
                                            id="zip"
                                            className="form-control"
                                            value={zip}
                                            onChange={(e) => setZip(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={creatingAddress}
                                    >
                                        Create Address
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateAddressForm;

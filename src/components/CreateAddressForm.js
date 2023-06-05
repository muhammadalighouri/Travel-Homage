import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAddress } from "./addressActions";

const CreateAddressForm = () => {
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const creatingAddress = useSelector((state) => state.address.creatingAddress);
    const error = useSelector((state) => state.address.error);

    const handleCreateAddress = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const addressData = {
            street,
            city,
            state,
            zip,
        };
        dispatch(createAddress(addressData));
        setShowModal(false);
    };

    return (
        <div>
            <h1>Create Address</h1>
            {error && <p>{error}</p>}
            <button onClick={handleCreateAddress}>Create Address</button>

            {showModal && (
                <div
                    className="modal"
                    style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
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

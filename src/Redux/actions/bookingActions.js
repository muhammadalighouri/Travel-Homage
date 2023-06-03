import axios from "../../api/axios";
import {
    BOOKING_CREATE_FAIL,
    BOOKING_CREATE_REQUEST,
    BOOKING_CREATE_SUCCESS,
} from "../constants/bookingConstants";

export const createBooking = (booking) => async (dispatch, getState) => {
    try {
        dispatch({
            type: BOOKING_CREATE_REQUEST,
        });

        const {
            UserLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post(
            `/api/v1/booking`,
            booking,
            config
        );

        dispatch({
            type: BOOKING_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: BOOKING_CREATE_FAIL,
            payload: message,
        });
    }
};

// ... Implement other actions similarly ...

// actions/favoriteActions.js

import axios from "../../api/axios";
import {
    ADD_FAVORITE_FAILURE,
    ADD_FAVORITE_REQUEST,
    ADD_FAVORITE_SUCCESS,
    GET_FAVORITES_FAILURE,
    GET_FAVORITES_REQUEST,
    GET_FAVORITES_SUCCESS,
    REMOVE_FAVORITE_FAILURE,
    REMOVE_FAVORITE_REQUEST,
    REMOVE_FAVORITE_SUCCESS,
} from "../constants/favouriteConstants";

// Action creators
export const addFavorite = (userId, carId) => async (dispatch) => {
    dispatch({ type: ADD_FAVORITE_REQUEST });

    try {
        const response = await axios.post("/api/v1/favorites/add", {
            userId,
            carId,
        });

        dispatch({
            type: ADD_FAVORITE_SUCCESS,
            payload: response.data.message,
        });
    } catch (error) {
        dispatch({
            type: ADD_FAVORITE_FAILURE,
            payload: "Failed to add the car to favorites.",
        });
    }
};

export const removeFavorite = (userId, carId) => async (dispatch) => {
    dispatch({ type: REMOVE_FAVORITE_REQUEST });

    try {
        const response = await axios.post("/api/v1/favorites/remove", {
            data: { userId, carId },
        });

        dispatch({
            type: REMOVE_FAVORITE_SUCCESS,
            payload: response.data.message,
        });
    } catch (error) {
        dispatch({
            type: REMOVE_FAVORITE_FAILURE,
            payload: "Failed to remove the car from favorites.",
        });
    }
};

export const getFavorites = (userId) => async (dispatch) => {
    dispatch({ type: GET_FAVORITES_REQUEST });

    try {
        const response = await axios.get(`/api/v1/favorites/${userId}`);

        dispatch({
            type: GET_FAVORITES_SUCCESS,
            payload: response.data.favorites,
        });
    } catch (error) {
        dispatch({
            type: GET_FAVORITES_FAILURE,
            payload: "Failed to get the user favorites.",
        });
    }
};

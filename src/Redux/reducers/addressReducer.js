// addressReducer.js
import {
    CREATE_ADDRESS_REQUEST,
    CREATE_ADDRESS_SUCCESS,
    CREATE_ADDRESS_FAILURE,
    GET_ALL_ADDRESSES_REQUEST,
    GET_ALL_ADDRESSES_SUCCESS,
    GET_ALL_ADDRESSES_FAILURE,
} from "../actions/addressActions";

const initialState = {
    creatingAddress: false,
    address: null,
    addresses: [],
    loading: false,
    error: null,
};

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ADDRESS_REQUEST:
            return {
                ...state,
                creatingAddress: true,
                error: null,
            };
        case CREATE_ADDRESS_SUCCESS:
            return {
                ...state,
                creatingAddress: false,
                address: action.payload,
                error: null,
            };
        case CREATE_ADDRESS_FAILURE:
            return {
                ...state,
                creatingAddress: false,
                address: null,
                error: action.payload,
            };
        case GET_ALL_ADDRESSES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_ALL_ADDRESSES_SUCCESS:
            return {
                ...state,
                addresses: action.payload,
                loading: false,
                error: null,
            };
        case GET_ALL_ADDRESSES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default addressReducer;

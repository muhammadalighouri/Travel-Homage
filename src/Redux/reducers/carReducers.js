// reducers.js

import {
    FETCH_CARS_REQUEST,
    FETCH_CARS_SUCCESS,
    FETCH_CARS_FAILURE,
} from '../constants/carsConstants';

const initialState = {
    loading: false,
    cars: [],
    error: '',
    pagination: {}
};
const toggleInitialState = {
    toggle: false,
};
export const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_CARS_SUCCESS:
            return {
                loading: false,
                cars: action.payload.cars,
                currency: action.payload.currency,

                error: '',
                pagination: {
                    total: action.payload.total,
                    page: action.payload.page,
                    limit: action.payload.limit
                }
            };
        case FETCH_CARS_FAILURE:
            return {
                loading: false,
                cars: [],
                error: action.payload,
                pagination: {}
            };
        default:
            return state;
    }
};
export const toggleReducer = (state = toggleInitialState, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {
                ...state,
                toggle: !state.toggle,
            };
        default:
            return state;
    }
};
const initialSt = {
    baseCurrency: 'SAR', // Default base currency
};

export const currencyReducer = (state = initialSt, action) => {
    switch (action.type) {
        case "SET_BASE_CURRENCY":
            return {
                ...state,
                baseCurrency: action.payload,
            };
        default:
            return state;
    }
};
export default carsReducer;

// addressActions.js
import axios from '../../api/axios';

// Action Types
export const CREATE_ADDRESS_REQUEST = 'CREATE_ADDRESS_REQUEST';
export const CREATE_ADDRESS_SUCCESS = 'CREATE_ADDRESS_SUCCESS';
export const CREATE_ADDRESS_FAILURE = 'CREATE_ADDRESS_FAILURE';
export const GET_ALL_ADDRESSES_REQUEST = 'GET_ALL_ADDRESSES_REQUEST';
export const GET_ALL_ADDRESSES_SUCCESS = 'GET_ALL_ADDRESSES_SUCCESS';
export const GET_ALL_ADDRESSES_FAILURE = 'GET_ALL_ADDRESSES_FAILURE';


// Action Creators
export const createAddressRequest = () => {
    return {
        type: CREATE_ADDRESS_REQUEST,
    };
};

export const createAddressSuccess = (address) => {
    return {
        type: CREATE_ADDRESS_SUCCESS,
        payload: address,
    };
};

export const createAddressFailure = (error) => {
    return {
        type: CREATE_ADDRESS_FAILURE,
        payload: error,
    };
};

// Async Action
export const createAddress = (addressData) => {
    return (dispatch) => {
        dispatch(createAddressRequest());

        axios
            .post('/api/v1/address', addressData)
            .then((response) => {
                const address = response.data;
                dispatch(createAddressSuccess(address));

            })
            .catch((error) => {
                const errorMessage = error.response?.data?.error || 'Failed to create address';
                dispatch(createAddressFailure(errorMessage));
            });
    };
};
export const getAllAddresses = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_ALL_ADDRESSES_REQUEST });
        const { UserLogin } = getState();
        const { userInfo: {
            user
        } } = UserLogin
        const response = await axios.get(`/api/v1/address/user/${user._id}`);
        const addresses = response.data;

        dispatch({
            type: GET_ALL_ADDRESSES_SUCCESS,
            payload: addresses,
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_ADDRESSES_FAILURE,
            payload: error.message,
        });
    }
};
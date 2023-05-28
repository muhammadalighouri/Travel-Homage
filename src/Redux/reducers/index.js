import { combineReducers } from "redux";
import { getFilterProductReducer } from "./filterProductReducer";
import { cartReducer } from "./cartReducer";
import { allProductsReducer, productCreateReviewReducer, singleProductReducer } from "./productReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./userReducers";
import { shippingDetailsReducer } from "./checkoutReducer";
import {
  allOrdersReducer,
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
} from "./orderReducers";
import carsReducer from "./carReducers";
import { rentalReducer } from "./rentalReducer";
import filterReducer from "./filterReducer";
const RootReducer = combineReducers({
  Products: allProductsReducer,
  ProductDetails: singleProductReducer,
  ProductCreateReview: productCreateReviewReducer,
  Cart: cartReducer,
  Cars: carsReducer,
  Filters: filterReducer,
  RentalInfo: rentalReducer,
  Checkout: shippingDetailsReducer,
  UserLogin: userLoginReducer,
  UserUpdate: userUpdateReducer,
  UserRegister: userRegisterReducer,
  OrderCreate: orderCreateReducer,
  OrderDetails: orderDetailsReducer,
  OrderPay: orderPayReducer,
  Orders: allOrdersReducer,
  filterData: getFilterProductReducer,

});

export default RootReducer;

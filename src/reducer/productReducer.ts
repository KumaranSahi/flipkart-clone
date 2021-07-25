import { ProductStateType, ProductActionType } from "./product.types";
import { initialState } from "./ProductContext";

export const productReducer = (
  state: ProductStateType,
  action: ProductActionType
) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "FILTER_BY_IDEAL_FOR":
      return {
        ...state,
        idealFor: action.payload,
      };
    case "FILTER_BY_BRANDS":
      return {
        ...state,
        brands: [...action.payload],
      };
    case "TOGGLE_FAST_DELIVERY":
      return {
        ...state,
        fastDelivery: !state.fastDelivery,
      };
    case "FILTER_BY_SIZE":
      return {
        ...state,
        size: action.payload,
      };
    case "CLEAR_FILTERS":
      return initialState;
    default:
      return state;
  }
};

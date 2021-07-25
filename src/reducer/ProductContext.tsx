import { useContext, createContext, ReactNode, useReducer } from "react";
import {
  ProductStateType,
  ProductItemType,
  ProductContextType,
} from "./product.types";
import products from "../data/products.json";
import { productReducer } from "./productReducer";

export const ProductContext = createContext({});

export const useProductContext = () =>
  useContext(ProductContext) as ProductContextType;

export const initialState: ProductStateType = {
  products: products,
  sortBy: undefined,
  idealFor: undefined,
  size: undefined,
  brands: [],
  fastDelivery: false,
};

const filteredProducts = (
  products: ProductItemType[],
  state: ProductStateType
) => {
  let productFiltering: ProductItemType[] = [...products];
  if (state.idealFor) {
    productFiltering = productFiltering.filter(
      ({ gender }) => gender === state.idealFor
    );
  }
  if (state.size) {
    productFiltering = productFiltering.filter(({ size }) =>
      size.includes(state.size!)
    );
  }
  if (state.brands && state.brands.length > 0) {
    productFiltering = productFiltering.filter(({ brand }) =>
      state.brands.includes(brand)
    );
  }
  if (state.fastDelivery) {
    productFiltering = productFiltering.filter(
      ({ fastDelivery }) => fastDelivery
    );
  }

  return productFiltering;
};

const sortedProducts = (
  products: ProductItemType[],
  sortBy: "LOW_TO_HIGH" | "HIGH_TO_LOW" | undefined
) => {
  let productSorting = [...products];
  if (sortBy === "LOW_TO_HIGH") {
    productSorting = productSorting.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "HIGH_TO_LOW") {
    productSorting = productSorting.sort((a, b) => b.price - a.price);
  }

  return productSorting;
};

export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const finalProducts = sortedProducts(
    filteredProducts(state.products, state),
    state.sortBy
  );

  return (
    <ProductContext.Provider
      value={{
        ...state,
        products: finalProducts,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

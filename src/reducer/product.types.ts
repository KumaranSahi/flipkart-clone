import { Dispatch } from "react";

export type ProductItemType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  size: string[];
  brand: string;
  fastDelivery: boolean;
  gender: string;
};

export type ProductStateType = {
  products: ProductItemType[];
  sortBy: "LOW_TO_HIGH" | "HIGH_TO_LOW" | undefined;
  idealFor: "FEMALE" | "MALE" | undefined;
  size: "S" | "M" | "L" | "XL" | undefined;
  brands: string[];
  fastDelivery: boolean;
};

export type ProductActionType =
  | {
      type: "SORT_BY_PRICE";
      payload: "LOW_TO_HIGH" | "HIGH_TO_LOW";
    }
  | {
      type: "FILTER_BY_IDEAL_FOR";
      payload: "FEMALE" | "MALE" | undefined;
    }
  | {
      type: "FILTER_BY_SIZE";
      payload: "S" | "M" | "L" | "XL" | undefined;
    }
  | {
      type: "FILTER_BY_BRANDS";
      payload: string[];
    }
  | {
      type: "TOGGLE_FAST_DELIVERY";
    }
  | {
      type: "CLEAR_FILTERS";
    };

export interface ProductContextType extends ProductStateType {
  products: ProductItemType[];
  dispatch: Dispatch<ProductActionType>;
}

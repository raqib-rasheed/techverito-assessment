import React, {
  useEffect,
  useContext,
  useReducer,
  type ReactElement,
} from "react";
import reducer from "../reducers/cart_reducer";
import { type ProductDataType } from "../utils/productData";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

export interface cartType {
  id: string;
  slug: string;
  name: string;
  amount: number;
  image: string;
  price: number;
}

export interface initialStateType {
  cart: cartType[];
  totalItems: number;
  totalAmount: number;
  addToCart: (
    id: string | undefined,
    slug: string | undefined,
    amount: number,
    singleProduct: ProductDataType | {},
  ) => void;
  removeItem: (id: string) => void;
  toggleAmount: (id: string, value: string) => void;
  clearCart: () => void;
}

const getLocalStorage: () => [] | cartType[] = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  addToCart: () => {},
  removeItem: () => {},
  toggleAmount: () => {},
  clearCart: () => {},
};

const CartContext = React.createContext<initialStateType>(initialState);

export const CartProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (
    id: string | undefined,
    slug: string | undefined,
    amount: number,
    singleProduct: ProductDataType | {},
  ) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, slug, amount, singleProduct },
    });
  };

  const removeItem = (id: string) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  const toggleAmount = (id: string, value: string) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // when the cart changes, store the changes to localStorage + re-calculate total amount in cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};

import { createSlice } from "@reduxjs/toolkit";

// Define the CartItem and CartState interfaces
interface CartItem {
  id: number;
  name: string;
  price: number;
  amount: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalItem: number;
  currencyType?: string;
}
interface PayloadAction {
  payload: {
    id: number;
    name: string;
    price: number;
    amount: number;
    productImage?: string;
    quantity?: number;
  };
}

// Function to load cart state from localStorage
const loadState = (): CartState => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return { items: [], totalAmount: 0, totalItem: 0 };
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load cart state from localStorage", e);
    return { items: [], totalAmount: 0, totalItem: 0 };
  }
};

// Function to save cart state to localStorage
const saveState = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.warn("Could not save cart state to localStorage", e);
  }
};

const initialState: CartState = loadState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state: CartState, action: PayloadAction) => {
      const existingItem = state.items.find(
        (item: CartItem) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.amount = action.payload.amount;
      } else {
        state.items.push({ ...action.payload });
        state.totalItem += 1;
      }

      state.totalAmount = state.items.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
      saveState(state);
    },
    removeItem: (state: CartState, action: PayloadAction) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.amount;
        state.items = state.items.filter((item) => item.id !== action.payload.id);
        state.totalItem -= 1;
        saveState(state);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

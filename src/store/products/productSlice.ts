 
import { createSlice } from "@reduxjs/toolkit";

interface Product {
  // Define the properties of a product here
}

interface InitialState {
  products: Product[]; 
  loading: boolean;
  error: string | null;
}
const initialState={
      products: [], 
        loading: false,
        error: null
}

 

const productSlice = createSlice({
  name: 'product',
  initialState,  
  reducers: { },
    extraReducers: (builder:any) => {
    builder
    
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

export default productSlice.reducer;

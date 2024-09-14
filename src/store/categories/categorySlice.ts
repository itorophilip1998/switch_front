 
import { createSlice } from "@reduxjs/toolkit"; 


interface Category {
  id: number;
  name: string;
}

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state:any, action:any) => {
      state.categories.push(action.payload);
    },
  },
  extraReducers: (builder:any) => {}
    
});

export const { addCategory } = categorySlice.actions;

export default categorySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@store";

export interface PageState {
  currentPage: number;
  previousPage: number;
  nextPage: number;
  count: number;
}

const initialState: PageState = {
  currentPage: 1,
  previousPage: 0,
  nextPage: 2,
  count: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.previousPage = action.payload - 1;
      state.currentPage = action.payload;
      state.nextPage = action.payload + 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

// Actions
export const { setPage, setCount } = pageSlice.actions;

// Selectors
export const currentPage = (state: RootState) => state.page.currentPage;
export const previousPage = (state: RootState) => state.page.previousPage;
export const nextPage = (state: RootState) => state.page.nextPage;
export const count = (state: RootState) => state.page.count;

export default pageSlice.reducer;

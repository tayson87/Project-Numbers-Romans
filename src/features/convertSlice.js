import { createSlice } from '@reduxjs/toolkit'
import convertNumbers from "../components/convertNumbers";

export const convertSlice = createSlice({
  name: "convert",
  initialState: {
    value: "",
  },
  reducers: {
    romanToDecimal: (state, action) => {
      let result = convertNumbers(action.payload, "romanToDecimal");

      if (!result) {
        alert("Please enter a valid number!");
        result = 0;
      }

      state.value = result;
    },
    decimalToRoman: (state, action) => {
      let result = convertNumbers(action.payload, "decimalToRoman");

      if (!result) {
        alert("Please enter a valid number!");
        result = 0;
      }

      state.value = result;
    },
  },
});

export const { romanToDecimal, decimalToRoman } = convertSlice.actions;

export default convertSlice.reducer
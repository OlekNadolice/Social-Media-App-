import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  name: "",
  profileImage: "",

  age: 0,
};

const StepFormSlice = createSlice({
  name: "StepFormSlice",
  initialState,
  reducers: {
    validateFirstStep: (state, action) => {
      state.currentStep = 2;
    },
    validateSecondStep: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.currentStep = 3;
    },

    validateThirdStep: (state, action) => {
      state.profileImage = action.payload;
      state.currentStep = 4;
    },

    validateFourthStep: (state, action) => {},

    oneStepBackwards: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const {
  validateFirstStep,
  validateSecondStep,
  validateThirdStep,
  validateFourthStep,
  validateFifthStep,
  oneStepBackwards,
} = StepFormSlice.actions;

export default StepFormSlice.reducer;

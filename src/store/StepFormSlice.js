import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  name: "",
  profileImage: "",
  navUserImage: "",
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
      state.profileImage = action.payload.profileImage;
      state.navUserImage = action.payload.navUserImage;
      state.currentStep = 4;
    },

    resetFormSteps: (state, action) => {
      state.currentStep = 1;
    },

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
  resetFormSteps,
} = StepFormSlice.actions;

export default StepFormSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  profileImage: "",
  isLoggedIn: false,
  age: "",
  email: "",
  id: "",
  description: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.profileImage = action.payload.image;
      state.email = action.payload.email;
      state.age = action.payload.age;
      state.description = action.payload.description;
      state.id = action.payload.id;
    },
    updateUserInfo: (state, action) => {
      state.name = action.payload.name;
      state.profileImage = action.payload.profileImage;
    },

    logoutUser: state => {
      state.isLoggedIn = false;
      state.name = "";
      state.profileImage = "";
      state.email = "";
      state.age = "";
      state.description = "";
      state.id = "";
    },
  },
});

export const { loginUser, updateUserInfo, logoutUser } = userSlice.actions;

export default userSlice.reducer;

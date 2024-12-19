import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/loginParticipanteSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;

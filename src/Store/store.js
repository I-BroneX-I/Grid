import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from './registrationSlice';

export default configureStore({
    reducer: {
        registration: registrationReducer
    }
})
import { createSlice } from "@reduxjs/toolkit";

const regisrtationSlice = createSlice({
    name: 'registration',
    initialState: {
        authorization: false,
        usersArr: [
            { id: 1, userName: 'Vlad', password: '12345'},
        ]
    },
    reducers: {

    }
})



export default regisrtationSlice.reducer;

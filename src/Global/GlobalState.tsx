import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mainUser: "" || null
}

const GlobalState = createSlice({
  name: "AuthState",
  initialState,
  reducers: {
    CreateUser: ((state: any, {payload}: any)=>{
      state.mainUser = payload
  }),

  logOut:(state:any)=>{
      state.mainUser = null
  }
  }
});

export const {
  logOut,CreateUser

} = GlobalState.actions

export default GlobalState.reducer
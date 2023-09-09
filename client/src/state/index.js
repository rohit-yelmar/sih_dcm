import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239867500011c",
  user:null,
  token:null,
  cases:[],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin:(state,action)=>{
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout:(state)=>{
      state.user = null;
      state.token = null;
    },
    setCases:(state,action)=>{
      state.cases = action.payload.cases;
    }
  },
});


export const { setMode,setLogin,setLogout,setCases } = globalSlice.actions;

export default globalSlice.reducer;
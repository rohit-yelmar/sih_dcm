import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "64fb2259e2ba97bc16aa4c79",
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
    setUserId:(state,action)=>{
      state.userId = action.payload.userId;
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


export const { setMode,setLogin,setLogout,setCases,setUserId } = globalSlice.actions;

export default globalSlice.reducer;
import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"

const baseUrl= "https://api.quotable.io/"


export const getQuotes= createAsyncThunk("quotes/getQuotes", async()=>{
    return fetch(baseUrl+"random").then((res)=> 
    res.json()
    
    );
})

const quotesSlice =  createSlice(({
    name:"quotes",
    initialState:{
        quotes:[],
        loading:false
    },
    extraReducers:{
        [getQuotes.pending]:(state,action)=>{
            state.loading= true
        },
        [getQuotes.fulfilled]:(state,action)=>{
            state.loading= false
            state.quotes= action.payload
        },
        [getQuotes.rejected]:(state,action)=>{
            state.loading= false
        },
        
        
    }
}))

export default quotesSlice.reducer
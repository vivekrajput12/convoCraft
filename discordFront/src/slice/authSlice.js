import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async(credentials,{rejectWithValue})=>{
        try{
            console.log("hitting")
        const response = await axios.post('http://localhost:8800/auth/login', credentials);
        return response
        }catch(error){
        return rejectWithValue(error);
        }
    }
)
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async(credentials,{rejectWithValue})=>{
        try{
            console.log("hitting 2")
        const response = await axios.post('http://localhost:8800/auth/register', credentials);
        return response
        }catch(error){
        return rejectWithValue(error);
        }
    }
)
const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:{},
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state)=>{
            state.loading=true;
            state.error=false;
        })
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.user = action.payload;
            state.loading=false;
            state.error=false;
        })
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
        builder.addCase(registerUser.pending,(state,action)=>{
            state.loading=true;
            state.error=null;
        })
        builder.addCase(registerUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.user = action.payload;
            state.REGISTER_USER_SUCCESSFULLY = true
            state.error=action.payload;
        })
        builder.addCase(registerUser.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
    }
})
export default authSlice.reducer;
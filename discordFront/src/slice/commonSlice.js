import { createSlice } from '@reduxjs/toolkit';
const commonSlice = createSlice({
    name:'common',
    initialState:{},
    reducers:{
        setSelectedChannel:(state,action)=>{
            state.selectedChannel=action.payload;
        }
    }
})
export const { setSelectedChannel } = commonSlice.actions;
export default commonSlice.reducer
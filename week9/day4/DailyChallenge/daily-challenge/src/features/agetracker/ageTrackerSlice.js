import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"




const initialState = {
    age: 0,
    status: 'success'
}


export const addAge = createAsyncThunk('ageTracker/addAge', async () => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('time out');
            res()
        }, 2 * 1000);
    })
})

export const minusAge = createAsyncThunk('ageTracker/minusAge', async () => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('time out out');
            res()
        }, 1 * 1000);
    })
})

const ageTrackerSlice = createSlice({
    name: 'ageTracker',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(addAge.pending, (state) => {
                state.status = 'preparing to increase age...'
            })
            .addCase(addAge.rejected, (state) => {
                state.status = 'failed to increase....'
            })
            .addCase(addAge.fulfilled, (state)=> {
                state.status = 'success'
                state.age += 1
            })
            .addCase(minusAge.pending, (state) => {
                state.status = 'preparing to reduce age'
            })
            .addCase(minusAge.rejected, (state) => {
                state.status = 'failed to decrease....'
            })
            .addCase(minusAge.fulfilled, (state) => {
                state.status = 'success'
                state.age -= 1
            })
    }
})

export const {} = ageTrackerSlice.actions

export default ageTrackerSlice.reducer
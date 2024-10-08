import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState ={
    users: [], 
    status: ''
}

export const getAllUsers = createAsyncThunk("users/getall", async () => {
        const respons = await fetch('https://jsonplaceholder.typicode.com/users') 
        const data = await respons.json()
        return data
})


const usersSlice = createSlice({
    name: 'users', 
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(getAllUsers.pending, (state) => {
            state.status = 'loading'   
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.status = 'success'
            state.users = action.payload
        })
        .addCase(getAllUsers.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export const {} = usersSlice.actions

export default usersSlice.reducer
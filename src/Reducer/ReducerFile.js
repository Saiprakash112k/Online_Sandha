import { createSlice } from '@reduxjs/toolkit'
export const AddCartFunc = createSlice({
    name: 'AddCart',
    initialState: {
        StoreData: [],
        counter: 0,
        value:0
    },
    reducers: {
        CallMe: (state, action) => {
            console.log(action.payload)
            switch (action.type) {
                case 'AddCart/CallMe':
                    state = { ...state, StoreData: [...state.StoreData, action.payload.stateValue] }
            }
            state.counter = state.StoreData.length;
state.value = action.payload.value
            return state;

        },
        remove : (state,action)=>{
            state ={...state,StoreData:[...action.payload]}
            state.counter = state.StoreData.length
            return state
        }
       
    }
})
export const { CallMe,remove} = AddCartFunc.actions
export default AddCartFunc.reducer

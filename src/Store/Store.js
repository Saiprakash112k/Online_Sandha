import {configureStore} from '@reduxjs/toolkit';
import  AddCartFunc  from '../Reducer/ReducerFile';

const store = configureStore({
    reducer:{
        AddCart: AddCartFunc
    }
})
export default store;
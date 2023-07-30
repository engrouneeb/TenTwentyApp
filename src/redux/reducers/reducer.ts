import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {DataInterface} from '../../interfaces';
import {getUniqueId} from '../../utils';

const initialState: DataInterface[] = [];

const AppReducer = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    addCategory: (state, action) => {},
    removeCategory: (state, action) => {},
    addAttribute: (state, action) => {},
    removeAttribute: (state, action) => {},
    addItem: (state, action) => {},
    removeItem: (state, action) => {},
  },
});

export const {
  addCategory,
  removeCategory,
  addAttribute,
  removeAttribute,
  addItem,
  removeItem,
} = AppReducer.actions;

export const RootReducers = combineReducers({
  appSlice: AppReducer.reducer,
});

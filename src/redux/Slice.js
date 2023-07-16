import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  inputs:{}
};

const Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.inputs = action.payload;
    },
  },
});

export default Slice.reducer;
export const {setUser} = Slice.actions;

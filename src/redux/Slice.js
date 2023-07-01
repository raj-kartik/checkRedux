import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  inputs: {
    userName: [],
    surname: [],
    userClass: [],
  },
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const {inputName, value} = action.payload;
      state.inputs[inputName] = value;
      //   console.log(inputName);
    },
  },
});

export default slice.reducer;
export const {setUser} = slice.actions;

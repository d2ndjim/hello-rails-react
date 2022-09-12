import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMessages = createAsyncThunk("messages/fetchMessages", async () => {
  const res = await fetch("api/v1/messages");
  const messageJson = await res.json();
  return messageJson.message;
});

const options = {
  name: "message",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchMessages.fulfilled]: (state, action) => {
    const newState = { message: action.payload };
    return newState;
    }
  },
};

const messageSlice = createSlice(options);
export const selectMessage = (state) => state.message;
export default messageSlice.reducer;
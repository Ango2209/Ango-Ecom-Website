import { createAction } from "@reduxjs/toolkit";

export const resetState = createAction("Reset_all");
const initialState = {
  storageData: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
const extraReducersFactory = (
  builder,
  getRequest,
  createRequest
  //   getARequest,
  //   updateRequest,
  //   deleteRequest
) => {
  builder
    .addCase(getRequest.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.storageData = action.payload;
    })
    .addCase(getRequest.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
    })
    .addCase(createRequest.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.createdData = action.payload;
    })
    .addCase(createRequest.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
      state.message = action.error;
    });
  // .addCase(getARequest.pending, (state) => {
  //   state.isLoading = true;
  // })
  // .addCase(getARequest.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.isError = false;
  //   state.isSuccess = true;
  //   state.getAData = action.payload;
  // })
  // .addCase(getARequest.rejected, (state, action) => {
  //   state.isLoading = false;
  //   state.isError = true;
  //   state.isSuccess = false;
  //   state.message = action.error;
  // })
  // .addCase(updateRequest.pending, (state) => {
  //   state.isLoading = true;
  // })
  // .addCase(updateRequest.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.isError = false;
  //   state.isSuccess = true;
  //   state.updatedData = action.payload;
  // })
  // .addCase(updateRequest.rejected, (state, action) => {
  //   state.isLoading = false;
  //   state.isError = true;
  //   state.isSuccess = false;
  //   state.message = action.error;
  // })
  // .addCase(deleteRequest.pending, (state) => {
  //   state.isLoading = true;
  // })
  // .addCase(deleteRequest.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.isError = false;
  //   state.isSuccess = true;
  // })
  // .addCase(deleteRequest.rejected, (state, action) => {
  //   state.isLoading = false;
  //   state.isError = true;
  //   state.isSuccess = false;
  //   state.message = action.error;
  // })
  // .addCase(resetState, () => initialState);
};
export default extraReducersFactory;

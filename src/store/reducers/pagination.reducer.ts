import { createSlice } from '@reduxjs/toolkit';

interface ActionProps {
  payload: number;
  type: string;
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    pageIndex: 1,
    pageSize: 10,
    pageCount: 0,
  },
  reducers: {
    setPageIndex: (state, action: ActionProps) => {
      state.pageIndex = action.payload;
    },
    setPageSize: (state, action: ActionProps) => {
      state.pageSize = action.payload;
    },
    setPageCount: (state, action: ActionProps) => {
      state.pageCount = action.payload;
    },
  },
});

export const { setPageIndex, setPageSize, setPageCount } = paginationSlice.actions;

export default paginationSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

interface ActionProps {
  payload: boolean;
  type: string;
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isExpand: true,
    isHide: true,
    activeSub: '',
  },
  reducers: {
    setIsExpand: (state, action: ActionProps) => {
      state.isExpand = action.payload;
    },
    setIsHide: (state, action: ActionProps) => {
      state.isHide = action.payload;
    },
    setActiveSub: (state, action: { payload: string; type: string }) => {
      state.activeSub = action.payload;
    },
    resetInitial: (state) => {
      state.isExpand = true;
      state.isHide = true;
    },
  },
});

export const { setIsExpand, setIsHide, setActiveSub, resetInitial } = sidebarSlice.actions;

export default sidebarSlice.reducer;

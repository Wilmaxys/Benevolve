import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuItems: [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      link: '/'
    },
    {
      title: 'ShowChart',
      icon: 'auto_graph',
      link: '/'
    }
  ]
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {}
});

export const selectMenuItems = (state) => state.sidebar.menuItems;

export default sidebarSlice.reducer;

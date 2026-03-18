"use client";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isMobileMenuOpen: boolean;
  isScrolled: boolean;
  activeProjectFilter: string;
  activeBlogFilter: string;
  lightboxImage: string | null;
  isContactFormSubmitting: boolean;
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  isScrolled: false,
  activeProjectFilter: "all",
  activeBlogFilter: "all",
  lightboxImage: null,
  isContactFormSubmitting: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    setIsScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    setActiveProjectFilter: (state, action: PayloadAction<string>) => {
      state.activeProjectFilter = action.payload;
    },
    setActiveBlogFilter: (state, action: PayloadAction<string>) => {
      state.activeBlogFilter = action.payload;
    },
    openLightbox: (state, action: PayloadAction<string>) => {
      state.lightboxImage = action.payload;
    },
    closeLightbox: (state) => {
      state.lightboxImage = null;
    },
    setContactFormSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isContactFormSubmitting = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  closeMobileMenu,
  setIsScrolled,
  setActiveProjectFilter,
  setActiveBlogFilter,
  openLightbox,
  closeLightbox,
  setContactFormSubmitting,
} = uiSlice.actions;

export default uiSlice.reducer;

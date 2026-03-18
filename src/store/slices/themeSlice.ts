"use client";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  mode: ThemeMode;
  resolvedTheme: "light" | "dark";
}

const initialState: ThemeState = {
  mode: "dark",
  resolvedTheme: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
    setResolvedTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.resolvedTheme = action.payload;
    },
    toggleTheme: (state) => {
      state.mode = state.resolvedTheme === "dark" ? "light" : "dark";
      state.resolvedTheme = state.mode as "light" | "dark";
    },
  },
});

export const { setThemeMode, setResolvedTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

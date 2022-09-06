import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeInteface {
    theme:string;
    isChecked:boolean;
}

const initialState:ThemeInteface = {
    theme:"light",
    isChecked:false
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        setTheme( state, action: PayloadAction<string> ){
            state.theme = action.payload;
            state.isChecked=!state.isChecked;
        }
    }
})

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
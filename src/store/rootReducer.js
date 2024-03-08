import { combineReducers } from "redux";
import themeSlice from "./theme";
import cartSlice from "./cart";
// import userSlice from "./userSlice";

const rootReducer = combineReducers({
    themeReducer: themeSlice.reducer,
    cartReducer: cartSlice.reducer,
    // userReducer: userSlice.reducer
})

export default rootReducer

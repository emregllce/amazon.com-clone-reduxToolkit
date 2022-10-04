import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../helpers/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const initialState = {
  loading: false,
  currentUser: "",
  error: "",
};

export const register = createAsyncThunk(
  "user/register",
  async ({ email, password, name, navigate }) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    navigate("/");
  }
);

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password, navigate }) => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  await signOut(auth);
});

// export const activeUser = () => (dispatch) {

// }

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers:{
    activeUser(state, action) {
        state.currentUser = action.payload?.currentUser
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.currentUser;
        state.error = "";
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.currentUser = "";
        state.error = action.error.message;
      })

      .addMatcher(login.pending, (state) => {
        state.loading = true;
      })
      .addMatcher(login.rejected, (state, action) => {
        state.loading = false;
        state.currentUser = "";
        state.error = "";
      })
      .addMatcher(login.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = auth.currentUser;
        state.error = "";
      })
    //   .addMatcher(logout.fulfilled, (state) => {
    //     state.loading = false;
    //     state.currentUser = "";
    //     state.error = "";
    //   })
    //   .addMatcher(logout.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addMatcher(logout.rejected, (state) => {
    //     state.loading = false;
    //     state.currentUser = "";
    //     state.error = "";
    //   });
  },
});

export default userSlice.reducer;
export const { activeUser } = userSlice.actions;


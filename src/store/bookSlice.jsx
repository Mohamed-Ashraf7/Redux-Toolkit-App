import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get data from json server
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("http://localhost:3005/books");
      return response.data;
    } catch (error) {
      return new rejectWithValue(error.message);
    }
  }
);
// send data to json server

export const insertBook = createAsyncThunk(
  "book/insertBook",
  async (insertData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(
        "http://localhost:3005/books",
        insertData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// delete book
export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await axios.delete(`http://localhost:3005/books/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//book info
export const bookinfo = createAsyncThunk(
  "book/bookinfo",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(
        `http://localhost:3005/books/${item.id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// re-use of loading and error status
const reusableReducer = (type) => ({
  [type.pending]: (state, action) => {
    state.loading = true;
    state.error = null;
  },
  [type.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
});

const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], loading: false, error: null, info: null },
  extraReducers: {
    //************* get books reducers
    ...reusableReducer(getBooks),
    [getBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },

    //************* insert Books reducers
    ...reusableReducer(insertBook),
    [insertBook.fulfilled]: (state, action) => {
      state.loading = false;
      state.books.push(action.payload);
    },

    //************* delete Book reducers
    ...reusableReducer(deleteBook),
    [deleteBook.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = state.books.filter((ele) => ele.id !== action.payload);
      // انا مرجع من المسح ال id اللي هو متخزن في ال payload
    },
    //************* book info

    [bookinfo.fulfilled]: (state, action) => {
      state.loading = false;
      state.info = action.payload;
    },
  },
});

export default bookSlice.reducer;

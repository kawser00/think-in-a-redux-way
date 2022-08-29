const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const fetch = require("node-fetch");

initialState = {
  loading: false,
  error: null,
  posts: [],
}

//create async thunk
const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await response.json();
  return posts;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers:
    (builder) => {
      builder
        .addCase(fetchPosts.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          state.posts = [];
        })
    },
});

module.exports = postSlice.reducer;
module.exports.fetchPosts = fetchPosts;
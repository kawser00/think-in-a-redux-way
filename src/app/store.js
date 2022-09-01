import { configureStore } from '@reduxjs/toolkit';
import videosReducer from '../features/videos/videosSlice';
import videoReducer from '../features/video/videoSlice';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice';
import tagsReducer from '../features/tags/tagsSlice';

export const store = configureStore({
  reducer: {
    relatedVideos: relatedVideosReducer,
    videos: videosReducer,
    video: videoReducer,
    tags: tagsReducer,
  },
});

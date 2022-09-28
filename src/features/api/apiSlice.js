import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9000/',
  }),
  tagTypes: ['Videos', 'Video', 'RelatedVideos'],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => '/videos',
      keepUnusedDataFor: 600,
      providesTags: ['Videos'],
    }),
    getVideo: builder.query({
      query: (videoId) => `/videos/${videoId}`,
      providesTags: (result, error, arg) => {
        console.log(result);
        return [{ type: 'Video', id: arg }];
      },
    }),
    // ?title_like=react&title_like=tailwind&_limit=4
    getRelatedVideos: builder.query({
      query: ({id, title}) => {
        const tags = title.split(' ');
        const likes = tags.map(t => `title_like=${t}`);
        const queryString = `/videos?${likes.join('&')}&_limit=4`;
        return queryString;
      },
      providesTags: (result, error, arg) => [{ type: 'RelatedVideos', id: arg.id }],
    }),
    addVideo: builder.mutation({
      query: (data) => ({
        url: '/videos',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Videos'],
    }),
    editVideo: builder.mutation({
      query: ({videoId, data}) => ({
        url: `/videos/${videoId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        'Videos',
        { type: 'Video', id: arg.videoId },
        { type: 'RelatedVideos', id: arg.videoId }
      ],
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Videos'],
    }),
  }),
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery, useAddVideoMutation, useEditVideoMutation, useDeleteVideoMutation } = apiSlice;
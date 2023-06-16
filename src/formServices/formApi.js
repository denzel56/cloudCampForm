import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formApi = createApi({
  reducerPath: 'formApi',
  tagTypes: ['formData'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp/frontend'
  }),
  endpoints: (build) => ({
    fetchAllFormData: build.query({
      query: () => ({
        url: '/',

      }),
      // eslint-disable-next-line
      providesTags: result => ['userData']
    }),
    sendData: build.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['formData']
    })
  })
})

export const { useSendDataMutation } = formApi;

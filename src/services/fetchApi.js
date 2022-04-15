// codes to fetch api from server
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import {BASE_URL} from '../helpers/constant';

export const fetchApi = createApi({
    reducerPath: 'fetchApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://dog.ceo/api/"}),
    endpoints: (builder) => ({
        getBreed: builder.query({
            query: (breedName) => `/${breedName}`,
        }),
    }),
});

export const useFetchApi = fetchApi.endpoints.getBreed.useQuery;
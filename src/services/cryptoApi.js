import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const cryptoApiHeaders = {
//     'X-RapidAPI-Key': 'ce57258764msh59c5faef6b3e88bp1b8ef2jsn15494851fadd',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// }



const cryptoApiHeaders = {
    'x-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'x-RapidAPI-Key': 'ce57258764msh59c5faef6b3e88bp1b8ef2jsn15494851fadd',
  };


  console.log(cryptoApiHeaders,"ADJASJD");



const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
}= cryptoApi;

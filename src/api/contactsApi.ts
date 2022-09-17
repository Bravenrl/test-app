  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiRoutes, API_SERVER_URL } from '../config/api.config';
import { Reducer } from '../config/store.config';
import { Contact } from '../types/data.types';
  
  export const contactsApi = createApi ({
    reducerPath: Reducer.Data,
    baseQuery: fetchBaseQuery({baseUrl: API_SERVER_URL, headers: {'Content-Type': 'application/json'}}),
    endpoints: (build) => ({
      getContacts: build.query<Contact[], string>({
        query: (searchTerm='') => ApiRoutes.Contacts+`${(searchTerm !=='') ? `?name_like=${searchTerm}` : ''}`,
      })
    })
  });

  export const { useGetContactsQuery } = contactsApi

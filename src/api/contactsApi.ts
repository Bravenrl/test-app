import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiRoutes, API_SERVER_URL } from '../config/api.config';
import { Reducer } from '../config/store.config';
import { Contact } from '../types/data.types';

export const contactsApi = createApi({
  reducerPath: Reducer.Data,
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_SERVER_URL,
    headers: { 'Content-Type': 'application/json' },
  }),
  endpoints: (build) => ({
    getContacts: build.query<Contact[], string>({
      query: (searchTerm = '') =>
        ApiRoutes.Contacts +
        `${searchTerm !== '' ? `?name_like=${searchTerm}` : ''}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts' as const, id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    mutateContact: build.mutation<Contact, Contact>({
      query: ({ id, ...body }) => ({
        url: `${ApiRoutes.Contacts}${id ? `/${id}` : ''}`,
        method: id ? 'PUT' : 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: build.mutation<{}, number>({
      query: (id) => ({
        url: `${ApiRoutes.Contacts}${id ? `/${id}` : ''}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useMutateContactMutation,
  useDeleteContactMutation,
} = contactsApi;

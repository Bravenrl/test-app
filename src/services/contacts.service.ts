import { api } from '../api/api';
import { ApiRoutes } from '../config/api.config';
import { Contact, ContactNew } from '../types/data.types';

export const AuthService = {
    async getAll(searchTerm?: string) {
        return api.get<Contact[]>(ApiRoutes.Contacts, {
          params: searchTerm
            ? {
                searchTerm,
              }
            : {},
        });
      },
      
      async create(data:ContactNew) {
        return api.post<Contact>(ApiRoutes.Contacts, data);
      },
    
      async update(id: number, data: ContactNew) {
        return api.put<string>(ApiRoutes.Contacts+`/${id}`, data);
      },

      async delete(id: number) {
        return api.delete<string>(ApiRoutes.Contacts+`/${id}`);
      },    
};
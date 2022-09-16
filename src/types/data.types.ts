export type AuthDataReq = {
  email: string;
  password: string;
};

export type AuthDataRes = {
  accessToken: string;
  user: User;
};

export type User = {
  id: number;
  email: string;
}

export type Contact = {
  id: number;
  name: string;
  phone: string;
  email: string;
  city: string;
};

export type ContactNew = Omit<Contact, "id">

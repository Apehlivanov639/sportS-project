

export interface User {
  products: string[];
  _id: string;
  email: string;
  username: string;
  password: string;
}

export interface UserForAuth {
  username: string;
  email: string;
  password: string;
  id: string;
}

export interface ProfileDetails {
  username: string;
  email: string;
}
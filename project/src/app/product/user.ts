

export interface User {
  themes: string[];
  _id: string;
  email: string;
  username: string;
  password: string;
}

export interface UserForAuth {
  firstName: string;
  email: string;
  password: string;
  id: string;
}

export interface ProfileDetails {
  username: string;
  email: string;
  tel: string;
}
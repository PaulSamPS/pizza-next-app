export interface IUser {
  id: string;
  phone: string;
  role: string;
  email: string;
  name: string;
  birthday: {
    day: string;
    month: string;
    year: string;
  };
}

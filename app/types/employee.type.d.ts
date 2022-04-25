export type Temployee = {
    id: number;
    username: string;
    name: string;
    email: string;
    gender: string;
    designation: string;
    phone_number: string;
    complete_address: string;
};
export type TEmployee = {
  error: number;
  msg: string;
  data: Temployee;
};

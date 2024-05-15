export type CustomerRequestDTO = {
  fullName: string;
  password: string;
  document: string;
  email: string;
};

export type CustomerResponseDTO = {
  customerId: string;
};

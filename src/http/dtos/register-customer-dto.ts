export type CustomerRequestDTO = {
  fullName: string;
  password: string;
  document: string;
  email: string;
};

export type CustomerResponseDTO = {
  status: number;
  body: {
    customerId: string;
  };
};

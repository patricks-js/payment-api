export interface Transaction {
  id: string;
  amount: number;
  sender: {
    id: string;
    fullName: string;
  };
  receiver: {
    id: string;
    fullName: string;
  };
}

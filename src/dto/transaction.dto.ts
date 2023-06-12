export default interface TransactionDto {
  id: string;
  description: string;
  amount: number;
  invoiceId: string;
  userId: string;
  category: string;
}

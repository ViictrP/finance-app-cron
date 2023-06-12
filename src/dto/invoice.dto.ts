import TransactionDto from './transaction.dto';

export default interface InvoiceDto {
  id: string;
  creditCardId: string;
  isClosed: boolean;
  month: string;
  year: number;
  transactions: TransactionDto[];
}

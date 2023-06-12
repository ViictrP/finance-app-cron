import InvoiceDto from './invoice.dto';

export default interface CreditCardDto {
  id: string;
  userId: string;
  title: string;
  invoices: InvoiceDto[];
}

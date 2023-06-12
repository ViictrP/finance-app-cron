import CreditCardDto from './credit-card.dto';
import TransactionDto from './transaction.dto';
import RecurringExpenseDto from './recurring-expense.dto';

export default interface BalanceDto {
  creditCards: CreditCardDto[];
  transactions: TransactionDto[];
  recurringExpenses: RecurringExpenseDto[];
}

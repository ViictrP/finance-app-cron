type CreditCardExpenses = { [key: string]: number };

export default interface BalanceDto {
  salary: number;
  expenses: number;
  available: number;
  creditCardExpenses: CreditCardExpenses;
}

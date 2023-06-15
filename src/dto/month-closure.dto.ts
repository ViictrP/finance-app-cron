export default interface MonthClosureDto {
  id?: string;
  month: string;
  year: number;
  userId?: string;
  deleted?: boolean;
  deleteDate?: Date;
  createdAt?: Date;
  total: number;
  expenses: number;
  available: number;
}

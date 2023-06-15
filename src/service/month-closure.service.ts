import { getBalance } from './balance.service';
import { api } from '../lib/api';
import { format } from 'date-fns';
import MonthClosureDto from '../dto/month-closure.dto';
import { pt } from 'date-fns/locale';
import axios from 'axios';

type CreditCardsTotal = { [key: string]: number };

export const saveMonthClosure = async (): Promise<MonthClosureDto> => {
  const date = new Date();
  const month = format(date, 'MMM', { locale: pt }).toUpperCase();
  const year = date.getFullYear();
  const balance = await getBalance(month, year);
  const creditCardsAmount = 0;
  const transactionsAmount = 0;
  const recurringExpensesAmount = 0;
  const payload: MonthClosureDto = {
    available: 16000,
    expenses: creditCardsAmount + transactionsAmount + recurringExpensesAmount,
    total: 25000,
    month,
    year,
  };
  const { data: monthClosure } = await api.post<MonthClosureDto>('/month-closure', payload, {
    headers: axios.defaults.headers.common,
  });
  return monthClosure;
};

const doSum = (sum: number, current: number | string): number => sum + Number(current);

import { getBalance } from './balance.service';
import { api } from '../lib/api';
import { format } from 'date-fns';
import MonthClosureDto from '../dto/month-closure.dto';
import { pt } from 'date-fns/locale';
import axios from 'axios';

export const saveMonthClosure = async (): Promise<MonthClosureDto> => {
  const date = new Date();
  const month = format(date, 'MMM', { locale: pt }).toUpperCase();
  const year = date.getFullYear();
  const { salary, expenses, available } = await getBalance(month, year);
  const payload: MonthClosureDto = {
    available,
    expenses,
    total: salary,
    month,
    year,
  };
  const { data: monthClosure } = await api.post<MonthClosureDto>('/month-closures', payload, {
    headers: axios.defaults.headers.common,
  });
  return monthClosure;
};

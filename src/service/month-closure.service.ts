import { getBalance } from './balance.service';
import { api } from '../lib/api';
import MonthClosureDto from '../dto/month-closure.dto';

export const saveMonthClosure = async (): Promise<MonthClosureDto> => {
  const balance = await getBalance();
  //TODO do the calculations
  const { data: monthClosure} = await api.post<MonthClosureDto>('/month-closure', {});
  return monthClosure;
}

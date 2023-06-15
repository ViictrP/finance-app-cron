import BalanceDto from '../dto/balance.dto';
import { api } from '../lib/api';
import axios from 'axios';

export const getBalance = async (month: string, year: number): Promise<BalanceDto> => {
  const { data: balance } = await api.get<BalanceDto>(`/balances?month=${month}&year=${year}`, {
    headers: axios.defaults.headers.common
  });
  return balance;
};

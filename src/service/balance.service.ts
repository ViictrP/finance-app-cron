import BalanceDto from '../dto/balance.dto';
import { api } from '../lib/api';

export const getBalance = async (): Promise<BalanceDto> => {
  const { data: balance } = await api.get<BalanceDto>('/balance');
  return balance;
};

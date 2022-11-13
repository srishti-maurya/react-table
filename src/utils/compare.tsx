import { Data } from '../types/type';
import { SetStateAction } from 'react';

export const compare = (
  data: Data[],
  field: keyof Data,
  setData: React.Dispatch<SetStateAction<Data[]>>
) => {
  const res = [...data].sort((a, b) =>
    a[field] > b[field] ? 1 : b[field] > a[field] ? -1 : 0
  );
  return setData(res);
};

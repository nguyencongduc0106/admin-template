/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { BANK } from '@src/constants/api-endpoint.constant';

import axiosClient from './axiosClient';

export const bankService = {
  getListBank: (params: any) => {
    return axiosClient.get(BANK, { params });
  },
  addBank: (params: any) => {
    return axiosClient.post(BANK, params);
  },
};

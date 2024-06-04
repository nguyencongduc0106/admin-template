/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { TXN } from '@src/constants/api-endpoint.constant';

import axiosClient from './axiosClient';

export const txnService = {
  getListTxn: (params: any) => {
    return axiosClient.get(TXN, { params });
  },
};

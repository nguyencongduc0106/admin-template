/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { VA } from '@src/constants/api-endpoint.constant';

import axiosClient from './axiosClient';

export const vaService = {
  getListVA: (params: any) => {
    return axiosClient.get(VA, { params });
  },
  getDetailVA: (params: any) => {
    return axiosClient.get(VA, { params });
  },
  addVA: (params: any) => {
    return axiosClient.post(VA, params);
  },
  updateVA: (params: any) => {
    return axiosClient.put(VA, params);
  },
  deleteVA: (params: any) => {
    return axiosClient.delete(VA, params);
  },
};

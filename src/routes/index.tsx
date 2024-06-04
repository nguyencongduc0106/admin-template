import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from '@src/components/layout/auth-layout';
import MainLayout from '@src/components/layout/main-layout';
import Integrate from '@src/pages/integrate';
import NotFound from '@src/pages/not-found';
import Overview from '@src/pages/overview';
import Transaction from '@src/pages/transaction';

import ProtectRoute from './protect-route';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="" element={<Navigate to="login" />} />
        <Route path="login" element={<div />} />
        <Route path="forgot-password" element={<div />} />
        <Route path="reset-password" element={<div />} />
      </Route>

      <Route element={<ProtectRoute />}>
        <Route path="" element={<Navigate to="admin" />} />

        <Route path="/onboard" element={<MainLayout />}>
          <Route path="add-bank" element={<div />} />
          <Route path="add-va" element={<div />} />
          <Route path="verify-va" element={<div />} />
        </Route>

        <Route path="/admin" element={<MainLayout />}>
          <Route path="" element={<Navigate to="overview" />} />
          <Route path="overview" element={<Overview />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="bank" element={<div />} />
          <Route path="payment" element={<div />} />
          <Route path="integrate-api" element={<Integrate />} />
          <Route path="integrate-device" element={<Integrate />} />
          <Route path="integrate-telegram" element={<Integrate />} />
          <Route path="account-information" element={<div />} />
          <Route path="change-password" element={<div />} />
        </Route>

        <Route path="*" element={<MainLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;

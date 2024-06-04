import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute = () => {
  const checkAuthen = () => {
    return true;
  };

  return checkAuthen() ? <Outlet /> : <Navigate to="auth/login" />;
};

export default ProtectRoute;

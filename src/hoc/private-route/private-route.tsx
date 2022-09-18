import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../config/app.config';
import { useAuth } from '../../hooks/use-auth';

type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to={AppRoute.Home} />;
  }

  return children;
};

export default PrivateRoute;

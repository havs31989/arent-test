import { Navigate } from 'react-router-dom';
import { ProtectedRoute } from './AppProtectedRoute ';
import Home from './views/home/Home';

export class AppRouterName {
  public static readonly home = '/';
  public static readonly noMatch = '*';
  public static readonly login = '/login';
}

export const AppRouter = [
  {
    path: AppRouterName.noMatch,
    element: <Navigate to={AppRouterName.home} replace />,
  },
  {
    path: AppRouterName.home,
    element:
      <ProtectedRoute>
        <Home></Home>
      </ProtectedRoute>,
  },
];
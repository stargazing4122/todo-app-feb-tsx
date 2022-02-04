import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  component: () => JSX.Element;
  path?: string;
  exact?: boolean;
}

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

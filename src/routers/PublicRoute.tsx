import { Route, Redirect } from 'react-router-dom';
interface PublicRouteProps {
  isAuthenticated: boolean;
  component: () => JSX.Element;
  path?: string;
  exact?: boolean;
}

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: PublicRouteProps) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default PublicRoute;

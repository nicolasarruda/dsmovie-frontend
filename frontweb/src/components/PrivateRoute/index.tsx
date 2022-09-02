import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from 'utils/auth';

type Props = {
  children: React.ReactNode;
  path: string;
};

const PrivateRoute = ({ children, path }: Props) => {
  return (
    <Route
      path={path}
      render={({ location }) =>
        // || error.response.status === 403
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : (
          <>{children}</>
        )
      }
    />
  );
};

export default PrivateRoute;

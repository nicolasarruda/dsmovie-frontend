import Navbar from 'components/Navbar';
import Login from 'pages/Login';
import PrivateRoute from 'pages/PrivateRoute';
import PrivateRouteDetails from 'pages/PrivateRoute/PrivateRouteDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/movies" exact>
        <PrivateRoute />
      </Route>
      <Route path="/movies/:moviesId">
        <PrivateRouteDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

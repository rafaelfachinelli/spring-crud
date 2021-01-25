import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import CreateUsers from './pages/CreateUsers';
import ViewUsers from './pages/ViewUsers';
import UpdateUser from './pages/UpdateUser';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/users/create" component={CreateUsers} />
        <Route path="/users/view" component={ViewUsers} />
        <Route path="/users/update/:id" component={UpdateUser} />
      </Switch>
    </BrowserRouter>
  );
}
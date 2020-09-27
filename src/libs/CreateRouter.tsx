import React from 'react';
import { BrowserRouter as Router, Switch, Route as RoutePath } from 'react-router-dom';

interface Route {
  name: string;
  path: string;
  component: React.FC;
  exact?: boolean;
}

interface Routes {
  routes: Route[];
}

const CreateRouter = ({ routes }: Routes): React.ReactElement => {
  return (
    <Router>
      <Switch>
        {routes &&
          routes.map((route) => (
            <RoutePath key={route.name} path={route.path} component={route.component} exact={route.exact} />
          ))}
      </Switch>
    </Router>
  );
};

export default CreateRouter;

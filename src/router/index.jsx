import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import routes from "./routes";
import { PrivateRoute } from "./types";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {localStorage.getItem("isAuth") === "true" && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}

            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          {routes.private.map(({ path, component, name }) => (
            <PrivateRoute exact key={name} path={path} component={component} />
          ))}
          {routes.public.map(({ path, component, name }) => (
            <Route path={path} component={component} key={name} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;

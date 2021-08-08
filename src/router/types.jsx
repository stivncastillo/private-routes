import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("isAuth") === "true" ? (
          <Component {...props} />
        ) : (
          <>
            {alert("No tienes permitido el acceso a esta página")}
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          </>
        )
      }
    ></Route>
  );
};

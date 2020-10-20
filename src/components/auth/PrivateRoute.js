import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const UserProtected = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

UserProtected.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};


export default UserProtected;

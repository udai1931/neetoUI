import React, { useEffect, useState } from "react";

import { PageLoader } from "neetoui";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";
import Sidebar from "components/Common/Sidebar";
import { ROUTES } from "components/routeConstants";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeLogger();
    setAuthHeaders(setLoading);
  }, []);

  if (loading) {
    return (
      <div className="h-screen">
        <PageLoader />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="flex">
        <ToastContainer />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/notes" />
          </Route>
          {ROUTES.map(route => (
            <Route
              exact
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Main;

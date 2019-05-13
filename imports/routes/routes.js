import React from "react";
import { Meteor } from "meteor/meteor";
import { createBrowserHistory } from "history";
import { Switch, Router, Route } from "react-router";

import Home from "../ui/components/home/Home";
import Login from "../ui/components/login/Login";
import Signup from "../ui/components/signup/Signup";
import NotFound from "../ui/components/not-found/NotFound";

//hocs
import withHeader from '../ui/components/hocs/withHeader';

//hocs component
const HomeHeader = withHeader(Home, true, 'HOME');

const browserHistory = createBrowserHistory();
const unaunthenticatedPages = ["/", "signup"];
const aunthenticatedPages = ["/home"];

// start - controll the back/next broser buttons behavior
const onEnterPublicPage = Component => {
  if (Meteor.userId()) {
    return browserHistory.replace("/home");
  } else {
    return <Component />;
  }
};

const onEnterPrivatePage = Component => {
  if (!Meteor.userId()) {
    return browserHistory.replace("/");
  } else {
    return <Component />;
  }
};

export const onAuthChange = isAutheticated => {
  const pathName = browserHistory.location.pathname;
  const isUnauthenticatedPage = unaunthenticatedPages.includes(pathName);
  const isAutheticatedPage = aunthenticatedPages.includes(pathName);

  if (isUnauthenticatedPage && isAutheticated) {
    browserHistory.replace("/home");
  } else if (isAutheticatedPage && !isAutheticated) {
    browserHistory.replace("/");
  }
};

// end - controll the back/next broser buttons behavior
export const routes = (
  <Router history={browserHistory}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return onEnterPublicPage(Login);
        }}
      />
      <Route
        path="/signup"
        render={() => {
          return onEnterPublicPage(Signup);
        }}
      />
      <Route
        path="/home"
        render={() => {
          return onEnterPrivatePage(HomeHeader);
        }}
      />
      <Route
        path="*"
        render={() => {
          return <NotFound />;
        }}
      />
    </Switch>
  </Router>
);

//Логика постраницы навигации по страницам
//Куда то могут зайти только авторизованные

import React, { Component, useContext } from "react";
import { SwitchCase, Route, Redirect, Switch } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "../index";
import Shop from "../pages/Shop";
import { connect } from "react-redux";

const AppRoter = (props) => {
  const { isAuthenticated } = props; // показывает авторизован пользователь или нет
  console.log(isAuthenticated);
  return (
    <Switch>
      {isAuthenticated === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={SHOP_ROUTE} component={Shop} />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.user != null ?? false,
  };
};

export default connect(mapStateToProps, null)(AppRoter);

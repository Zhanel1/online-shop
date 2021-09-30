//Логика постраницы навигации по страницам
//Куда то могут зайти только авторизованные

import React, { Component, useContext } from 'react';
import { SwitchCase, Route, Redirect, Switch } from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import { SHOP_ROUTE } from '../utils/consts';
import {Context} from "../index";

const AppRoter = () => {
    const {user} = useContext(Context)// показывает авторизован пользователь или нет
    console.log(user)
    return(
        <Switch> 
            {user.isAuth === true && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component = {Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component = {Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRoter;
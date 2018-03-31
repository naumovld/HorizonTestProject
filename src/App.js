import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Router,Route, Switch } from 'react-router';
import Login from "./components/Login"
import Loading from "./components/Loading"
import Registration from "./components/Registration"
import Home from "./components/Home"
import Past from "./components/Past"
import Future from "./components/Future"

@inject('routing')
@observer
export default class App extends Component {
    render() {
        const { location, push, goBack } = this.props.routing;

        return (
            <Switch>
                <Route exact path="/" component={Loading} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />
                <Route path="/home/today" component={Home} />
            </Switch>
        );
    }
}

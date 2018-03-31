import React, { Component } from 'react';
import {inject, observer} from "mobx-react";
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom'

@inject('routing')
@observer
export default class Home extends Component{
    handleChangePage = (page) => {
        this.props.routing.push(`/home/${page}`)
    }

    render(){
        const { location, push, goBack } = this.props.routing;
        return(
            <div>
                <Link
                    to="/home/past"
                    underlayColor="#444"
                    href="/home/past"
                >
                </Link>
                <Link
                    to="/home/today"
                    underlayColor="#444"
                    href="/home/today"
                >
                </Link>
                <Link
                    to="/home/future"
                    underlayColor="#444"
                    href="/library/future"
                >
                </Link>
                <Switch>
                    <Route
                        exact
                        path="/home/past"
                    />
                    <Route
                        exact
                        path="/home/today"
                    />
                    <Route
                        exact
                        path="/home/future"
                    />
                </Switch>
            </div>
        )
    }
}

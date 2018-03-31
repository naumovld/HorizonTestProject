import React, { Component } from 'react';
import {inject, observer} from "mobx-react";
import Past from "./Past"
import Future from "./Future"
import Home from "./Home"

@inject('routing')
@observer
export default class Tabs extends Component{

    handlePageChange = page => () => {
        this.props.routing.push(`/tabs/${page}`);
    };

    render(){
        const { location, push, goBack } = this.props.routing;
        return(
            <div>

            </div>
        )
    }
}

import React, { Component } from 'react';
import {inject, observer} from "mobx-react";


@inject('routing')
@observer
export default class Home extends Component{
    render(){
        const { location, push, goBack } = this.props.routing;
        return(
            <div>
                <span>{location.pathname}</span>
                <button>past</button>
                <button>today</button>
                <button>future</button>
            </div>
        )
    }
}

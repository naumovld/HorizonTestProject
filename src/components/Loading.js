import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react';

@inject('routing')
@observer
export default class Loading extends Component {
    static propTypes = {
        history: PropTypes.object
    }

    componentDidMount() {
        setTimeout(() =>{
        },500)
            this.props.routing.replace('/login')
    }

    render() {
        return (
            <div>
                Tima pidr ,Vanya ++++
            </div>
        )
    }
}



import React, { Component } from 'react';
import {inject, observer} from "mobx-react";

@inject('routing')
@observer
class Login extends Component {
  RegisterForm = () =>{
    this.props.routing.push('/register')
  }
    render() {
    console.log("i am here")
        return (
            <div>
              <div>
                  <button>Sign Up</button>
                  <button onClick={this.RegisterForm}>registration</button>
              </div>
            </div>
        );
    }
}

export default Login;

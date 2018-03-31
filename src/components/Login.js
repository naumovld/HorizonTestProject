import React, { Component } from 'react';
import {inject, observer} from "mobx-react";

@inject('routing')
@observer
class Login extends Component {
  RegisterForm = () =>{
    this.props.routing.push('/register')
  }
    SignIn = () =>{
        this.props.routing.push('/home')
    }
    render() {
    console.log("i am here")
        return (
            <div>
                <div>
                    <input placeholder="mail" id="mail"  />
                </div>
                <div>
                    <input placeholder="password" id="password"  />
                </div>
              <div>
                  <button onClick={this.SignIn}>Sign In</button>
                  <button onClick={this.RegisterForm}>Sign Up</button>
              </div>
            </div>
        );
    }
}

export default Login;

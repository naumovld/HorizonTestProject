import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('routing')
@observer
class Registeration extends Component {
    HandleRegister = () =>{
        this.props.routing.push('/home')
    }
    render() {
    console.log("i am here")
        return (
            <div>
              <div>
                  <p>regaisa blya</p>
                  <button onClick={this.HandleRegister}> registration</button>
              </div>
            </div>
        );
    }
}

export default Registeration;

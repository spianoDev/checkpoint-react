import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Header from "../Header/Header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: props.contacts
        }
    }
  render() {
    return <div className="App">
        
        <main>
            <Switch>
                <Route path = "/" exact={true} component={Header}/>
                <Route path = "/new-contact" exact={true} component={Header}/>
            </Switch>
        </main>

        <p>app</p>
      </div>;
  }
}

export default App;
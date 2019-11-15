
import './App.scss';
//router
import {Route,Switch} from 'react-router-dom'
//components
import Navbar from './components/Navbar'
import Countries from './components/Countries';
import Country from './components/Country';
import NotFound from './components/NotFound';


import React, { Component } from 'react'

export default class App extends Component {
    state={
      darkMode:true
    }
     handlechanceColor = ()=>{
        const darkMode = !this.state.darkMode
        this.setState({darkMode:darkMode})
        if(darkMode){
          document.documentElement.setAttribute('data-theme','dark')
        }else{
          document.documentElement.setAttribute('data-theme','light')
        }
  } 

  render() {
    return (
      <React.Fragment>
        <Navbar darkMode={this.state.darkMode}  handlechanceColor={this.handlechanceColor} />
          <Switch>
            <Route path="/" exact component={Countries}  />
            <Route path="/country/:name" component={Country}/>
            <Route path="/not-found" component={NotFound}/>
          </Switch>
      </React.Fragment>
    )
  }
}


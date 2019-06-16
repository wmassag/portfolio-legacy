import React from "react"
import {BrowserRouter, Router, Route, Link, Switch} from "react-router-dom"

require("./style.scss")

import Home from "../Home/"
import Proximity from "../Proximity"

export default class Layout extends React.Component {
  constructor(props){
    super(props)
    
    this.scrollingPositions = {};
  }
  
  setScrollingPosition(path, value){
    this.scrollingPositions[path] = value;
    console.log("Stored scrolling position of " + path + " to: " + this.scrollingPositions[path])
  }
  getScrollingPosition(path){
    return (this.scrollingPositions[path]) ? this.scrollingPositions[path] : false;
  }
  
  render(){
    return(
      <div id="__Layout">
        <Switch>
          <Route exact path="/Proximity"
            render={(props) => <Proximity {...props} scrollSet={(p, v) => this.setScrollingPosition(p, v)} scrollGet={(p) => this.getScrollingPosition(p)} />}
          />
          <Route exact path="/"
            render={(props) => <Home {...props} scrollSet={(p, v) => this.setScrollingPosition(p, v)} scrollGet={(p) => this.getScrollingPosition(p)} />}
          />
        </Switch>
      </div>
    )
  }
}

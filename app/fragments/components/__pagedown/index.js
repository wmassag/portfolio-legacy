import React from "react"
import {Link} from "react-router-dom"

require("./style.scss")

import pageShape from "./shape.svg"

export default class Layout extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div className="__Page">
        <Link to="/">
          <img src={pageShape} alt="page down" title="page down" />
        </Link>
      </div>
    )
  }
}
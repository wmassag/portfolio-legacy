import React from "react"

require("./style.scss")

export default class Layout extends React.Component {
  constructor(props){
    super(props)
    
    //more to come
  }
  
  render(){
    return(
      <div id="__blueprint">
        Copmonent Name should be wrapper ID/class and needs to be updated in style.scss. Pages may use IDs, components must use classes.
      </div>
    )
  }
}
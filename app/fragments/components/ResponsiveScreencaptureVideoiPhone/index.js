import React from "react"

require("./style.scss")

export default class ResponsiveScreencaptureVideoiPhone extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    
    return(
      <div className="__responsiveScreencaptureVideoiPhone" style={(this.props.bgImg)? {backgroundImage: this.props.bgImg} : {}}>
        {"VIDEO COMPONENT"}
      </div>
    )
  }
}

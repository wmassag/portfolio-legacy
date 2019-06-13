import React from "react"

require("./style.scss")

export default class Heading extends React.Component {
  constructor(props){
    super(props)
    this.headingReference = React.createRef()
    this.boxReference = React.createRef()
  }
  
  fixWidth(e) {
    if(this.heading && this.box){
      this.box.style.width = (this.heading.offsetWidth + 20) + "px"
    }else(
      console.log("no nodes found, heading: " + this.heading + ", box: " + this.box)
    )
  }
  
  componentDidMount() {
    if(this.props.divided == true){
      this.heading = this.headingReference.current || "eval error"
      this.box = this.boxReference.current || "eval error"
      this.fixWidth()
  
      this.__fixWidth = this.fixWidth.bind(this) //generate fixed funciton reference, otherwise remove event can't remove the function, as it is not recognized as the same as the one bound by addEventListener
      window.addEventListener ("resize", this.__fixWidth)
    }
  }
  
  componentWillUnmount() {
    if(this.props.divided == true){
      this.heading = null
      this.box = null
      window.removeEventListener ("resize", this.__fixWidth)
      this.__fixWidth = null
    }
  }
  
  headingDivided(){
    var __export = {}
    switch(this.props.level) {
      case "1":
        __export.heading = <h1 ref={this.headingReference} className="divided">{this.props.children}</h1>
        __export.dividerClass = "h1"
      break
      case "2":
        __export.heading = <h2 ref={this.headingReference} className="divided">{this.props.children}</h2>
        __export.dividerClass = "h2"
      break
      case "3":
        __export.heading = <h3 ref={this.headingReference} className="divided">{this.props.children}</h3>
        __export.dividerClass = "h3"
      break
      case "4":
        __export.heading = <h4 ref={this.headingReference} className="divided">{this.props.children}</h4>
        __export.dividerClass = "h4"
      break
      case "5":
        __export.heading = <h5 ref={this.headingReference} className="divided">{this.props.children}</h5>
        __export.dividerClass = "h5"
      break
      default:
        __export.heading = <h6 ref={this.headingReference} className="divided">{this.props.children}</h6>
        __export.dividerClass = "h6"
      break
    }
    return __export
  }
  
  heading(){
    var __export = ""
    switch(this.props.level){
        case "1":
          __export = <h1>{this.props.children}</h1>
        break
        case "2":
          __export = <h2>{this.props.children}</h2>
        break
        case "3":
          __export = <h3>{this.props.children}</h3>
        break
        case "4":
          __export = <h4>{this.props.children}</h4>
        break
        case "5":
          __export = <h5>{this.props.children}</h5>
        default:
          __export = <h6>{this.props.children}</h6>
        break
      }
      return __export
  }
  
  render(){
    if(this.props.divided == true){
      let headingObj = this.headingDivided();
      let heading = headingObj.heading
      var classNamesDivider = "divider "
      classNamesDivider += headingObj.dividerClass
      
      return(
        <div className="__Heading">
        <div className={classNamesDivider}></div>
        <div ref={this.boxReference} className="box"></div>
        {heading}
        </div>
      )
    }else{
      let heading = this.heading();
      return (
        heading
      )
    }
  }
}

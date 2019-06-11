import React from "react"

require("./style.scss")

export default class H2 extends React.Component {
  constructor(props){
    super(props)
    this.h2Reference = React.createRef()
    this.boxReference = React.createRef()
  }
  
  fixWidth(e) {
    if(this.h2 && this.box){
      this.box.style.width = (this.h2.offsetWidth + 20) + "px"
    }else(
      console.log("no nodes found, h2: " + this.h2 + ", box: " + this.box)
    )
  }
  
  componentDidMount() {
    this.h2 = this.h2Reference.current || "eval error"
    this.box = this.boxReference.current || "eval error"
    this.fixWidth()

    this.__fixWidth = this.fixWidth.bind(this) //generate fixed funciton reference, otherwise remove event can't remove the function, as it is not recognized as the same as the one bound by addEventListener
    window.addEventListener ("resize", this.__fixWidth)
  }
  
  componentWillUnmount() {
    this.h2 = null
    this.box = null
    window.removeEventListener ("resize", this.__fixWidth)
    this.__fixWidth = null
  }
  
  render(){
    if(this.props.divided == true){
      return(
        <div className="__H2">
        <div className="divider"></div>
        <div ref={this.boxReference} className="box"></div>
        <h2 ref={this.h2Reference} className="divided">{this.props.children}</h2>
        </div>
      )
    }else{
      return (
        <h2>{this.props.children}</h2>
      )
    }
  }
}
import React from "react"

require("./style.scss")

export default class Layout extends React.Component {
  constructor(props){
    super(props)
    
    //more to come
  }
  
  render(){
    return(
      <div className="__Card">
        <img alt={this.props.imageAlt} src={this.props.imageURL} />
        <div className="contents">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <p className="emphasis">Meta:</p>
          <ul>
            {
              this.props.metaList.map((item, key) => (
                <li key={key}>{item}</li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

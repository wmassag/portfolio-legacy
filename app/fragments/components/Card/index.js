import React from "react"

require("./style.scss")

export default class Card extends React.Component {
  constructor(props){
    super(props)
    
    //more to come
  }
  
  render(){
    return(
      <div className="__Card">
        <div className="imageContainer">
        {
          (this.props.imageType === "iPhoneMockup") ?
            <div className="shapedShadow">
              <img alt={this.props.imageAlt} src={this.props.imageURL} />
            </div>
          :
            <img alt={this.props.imageAlt} src={this.props.imageURL} />
        }
        </div>
        <div className="content">
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
            {(this.props.externalURL) ?
              <div className="buttonGroup">
                <button>details</button>
                <button className="bright">visit</button>
              </div>
            :
                <div className="buttonGroup">
                  <button>details</button>
                </div>
            }
        </div>
        {(this.props.imageType === "iPhoneMockup") ? <div className="fader"></div> : "" }
      </div>
    )
  }
}

import React from "react"

require("./style.scss")

import Splash from "../Splash/"
import Card from "../../components/Card/"
import Vita from "../../components/Vita"

export default class Layout extends React.Component {
  constructor(props){
    super(props)
    
    //more to come
  }
  
  render(){
    return(
      <div id="__Layout">
        <Splash />
        <Card
          title="Proximity"
          externalURL="http://"
          
          imageURL="static/proximity/render.png"
          imageAlt="A rendered mockup of Proximity on iPhone"
          
          description="A location based social network, designed to connect locally. This social network connects people with their physical surroundings and the people near them."
          
          metaList={["UX Concept", "iOS UI", "Sketch, Adobe After Effects"]}
        />
        <Vita />
      </div>
    )
  }
}

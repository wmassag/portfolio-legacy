import React from "react"

require("./style.scss")

import Splash from "../Splash/"
import Card from "../../components/Card/"

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
          
          imageURL="static/proximity/render.png"
          imageAlt="A rendered mockup of Proximity on iPhone"
          
          description="Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum."
          
          metaList={["UX Concept", "iOS UI", "Sketch, Adobe After Effects"]}
        />
      </div>
    )
  }
}

import React from "react"

require("./style.scss")

import Splash from "../Splash/"
import Card from "../../components/Card/"
import Vita from "../../pages/Vita"

export default class Home extends React.Component {
  constructor(props){
    super(props)
    
    //more to come
  }
  
  componentWillUnmount(){
    this.props.scrollSet("home", (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0))
  }
  componentDidMount(){
    let restoreScroll = (this.props.scrollGet("home"))?this.props.scrollGet("home"):0;
    console.log(restoreScroll)
    window.setTimeout(function(){
      window.scrollTo(0, restoreScroll)
      console.log(restoreScroll)
    }, 50)
  }
  
  render(){
    return(
      <div id="__home">
        <Splash />
        <Card
          title="Proximity"
          
          imageURL="static/proximity/render.png"
          imageAlt="A rendered mockup of Proximity on iPhone"
          imageType="iPhoneMockup"
          
          description="A location based social network, designed to connect people locally. This social network connects meaningful interpersonal relationships with local business."
          
          metaList={["UX Concept", "iOS UI", "Sketch, Adobe After Effects"]}
        />
        
        <Card
          title="CI + IT"
          optionalPath={false}
          externalURL="http://seeapotheke.de/"
          
          imageURL="static/sapob/render.png"
          imageAlt="A rendered mockup of the redesigned homepage for See-Apotheke on iPhone"
          imageType="iPhoneMockup"
          
          description="Re-designs for logo, homepage, marketing materials, in-store displays and more for seeapotheke.de."
          
          metaList={
            ["CI & UX digital and analog",
            "Web UX and Code (Concrete5 CMS)",
            "Digital and print ads",
            "Copy",
            "Server configuration"]
          }
        />
        <Vita />
      </div>
    )
  }
}

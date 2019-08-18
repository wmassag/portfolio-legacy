import React from "react"
import ReactPlayer from "react-player"

require("./style.scss")
import iPhoneMockup from "./iPhoneMockup_XR.png"

export default class ResponsiveScreencaptureVideoiPhone extends React.Component {
  constructor(props){
    super(props)
    this.playerRef = React.createRef()
    this.deviceOverlayRef = React.createRef()
    
    //this.props.videoFiles = {lq, sd, hd}
    //this.props.aspectRatio = "XR XS_Max" || "XS X" || "6+ 6s+ 7+ 8+" || "6 6s 7 8"
    /*
    this._ar = this.props.device.split(" ")
    this.aspectRatio = this._ar.reduce((lastReturn, current) => {
      switch (current) {
        case "XR": case "XS_Max":
          return 0.4620535714
        break
        
        case "XS": case "X":
          return 0.4618226601
        break
        
        case "6+": case "6s+": case "7+": case "8+":
          return 0.5625
        break
        
        case "6": case "6s": case "7": case "8":
          return 0.5622188906
        break
        
        default:
          return -1
        break
      }
    })
    this._ar = null
    */
  }
  
  showVideoPlayer() {
    let overlay = this.deviceOverlayRef.current
    let player = this.playerRef.current
    if(overlay && player){
      player.className = "player playerShow"
      
      //temporary placement and size, until containing element has been rendered and its dimensions can be read by JS
      player.style.left = "0"
      player.style.top = "0"
      player.style.width = "0"
      player.style.height = "0"
      
      //now size the player
      window.setTimeout(function(){
        // The following code uses percentages of the overlay image to determine the necessary padding for the video in relation to the overlay image at it's current size
        player.style.left = Math.floor(overlay.offsetLeft + (overlay.width * 0.05863539446)) + "px"; //55px of a total width of 938px
        player.style.top = Math.floor(overlay.offsetTop + (overlay.height * 0.02340425532)) + "px"; //44px of a total height of 1880px
        player.style.width = Math.ceil(overlay.width - (overlay.width * 0.1172707889)) + "px"
        player.style.height = Math.ceil(overlay.height - (overlay.height * 0.04680851064)) + "px"
      }, 200)
    }else{
      console.error("Failed to identify device overlay image or video")
    }
  }
  
  hideVideoPlayer() {
    let player = this.playerRef.current
    if(player) {
      player.className = "player playerHide"
    }else{
      console.error("Failed to identify video player")
    }
  }
  
  componentDidMount() {
    this.showVideoPlayer()
  }
  
  render(){
    return(
      <div className="__responsiveScreencaptureVideoiPhone" style={(this.props.backdrop)? {backgroundImage: "url('" + this.props.backdrop + "')"} : {background: "rgba(0,0,0,0.1)"}}>
        <div className="container">
          <div className="player" ref={this.playerRef} >
            <ReactPlayer url={this.props.url} width="100%" height="100%" loop={true} />
          </div>
          <img className="iPhoneMockup" aria-hidden={"true"} src={iPhoneMockup} ref={this.deviceOverlayRef} />
        </div>
      </div>
    )
  }
}

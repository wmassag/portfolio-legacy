/*
  Component needs to render HTML or Markup, options:
  - https://www.npmjs.com/package/html-react-parser
  - https://www.npmjs.com/package/markdown
*/

import React from "react"

require("./style.scss")

export default class Vita extends React.Component {
  constructor(props){
    super(props)
    
    //more to come
  }
  
  render(){
    function dangerousHTML(){
      return {
        __html: "<p>Currently available for hire as an intern (UX, UI, code), I'm a student of <a href='http://digitaldesign.io/' target='_blank'>digitaldesign.io</a> at the University of Applied Sciences Ravensburg-Weingarten (HRW / <a href='http://hs-weingarten.de' target='_blank'>hs-weingarten.de</a>). I'm ready to see the world and move to a new city, country or continent, who knows, maybe one day even to another planet!</p><p>My curiosity in all things design, technology and science has been the driving force behind my decisions ever since I was a child. It has lead me to become a coding, digital designer with a focus on innovation.</p><p>I'm happy to hear from you: <a href='mailto:mail@wmassag.de'>mail@wmassag.de</a>.</p>"
      }
    }
            
    return(
      <div className="__Vita">
        <div className="angledTransition">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <section className="limiter">
          <h2 className="title">About Me</h2>
          <aside className="imageContainer">
            <img src="static/vita/portrait-2019.jpg" alt="Portrait photo of Wenzel Massag. Year: 2019." />
            <div className="overlayShadow"></div>
          </aside>
          <article className="content" dangerouslySetInnerHTML={dangerousHTML()} />
        </section>
        <div className="dirtyClearfix"> </div>
      </div>
    )
  }
}

/*
  
  1154:200
  
*/
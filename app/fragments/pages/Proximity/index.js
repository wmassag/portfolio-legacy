/*
  Component needs to render HTML or Markup, options:
  - https://www.npmjs.com/package/html-react-parser
  - https://www.npmjs.com/package/markdown
*/

import React from "react"
import {Link} from "react-router-dom"
import Heading from "../../components/Heading"

require("./style.scss")

export default class Layout extends React.Component {
  constructor(props){
    super(props)
    window.scrollTo(0,0)
    //more to come
  }
  
  render(){
    return(
      <div id="__proximity" className="bright">
        <div className="limiter">
          <h1>Proximity - 2018</h1>
          <article>
            <aside>{"🇩🇪 Eine deutsche Fassung ist als PDF Download verfügbar: Proximity Projekt-Dokumentatnion PDF (German)."}</aside>
            <p>{"🇺🇸 A location based social network, designed to inter-connect people and provide a link to local business. This concept is the result of a free choice project I did over the time of my fifth semester. The brief for this project was:"}</p>
            <blockquote>{"Find something you want to make. Plan to use 30% of your time, for this project, during this semester (which has only four months!)"}</blockquote>
            <p>{"I decided to dedicate this time to the conceptualization of a privacy first, locally connecting, social network, designed to be a gateway from the digital to the physical world and vice-versa. The heart of this concept is a mobile app. To fit the limited time frame I decided to limit myself to iOS on iPhone."}</p>
            <p>{"[COMPONENT FOR RESPONSIVE iPHONE SCREEN VIDEOS with descriptions] Description: Explore-tab, showing a map with the user's location and nearby points of interest, a notification and a pink wave emanating from the location of the POI."}</p>
            <section>
              <Heading level="2" divided={true}>{"Why & What is Proximity?"}</Heading>
              <p><q>{"It is increasingly difficult – if not entirely impossible – to reach younger members of the community and to motivate them to be part of our decision-making process!"}</q> {"(translated from German, summarized). The words of an employee of the city painted a clear picture of the civic disconnect plaguing our communities. A group of my fellow students had just presented their civic-engagement platform-concept to a packed room. The statement by that city official got my attention, I had been pondering this problem for years and had experienced this first hand in my home town."}</p>
              <p>{"With local newspapers disappearing and younger people not reading them at all, connecting the city government and local business with the people is getting ever more challenging. To address the disconnect between city governments, local business and the people, I set out to design a digital product. Interviews with strangers on busy city streets and business owners lead me to postulate a location-based, social platform, linking the digital and the analog world in the palm of our hands: The idea for a smartphone-app was born."}</p>
            </section>
            <section>
              <Heading level="2" divided={true}>{"UX"}</Heading>
              <p>{"My intent was to create a platform that got out of the way as much as possible. To keep things simple, I cherry-picked functions from the list of most requested features. The app layout was prioritized, based on the popularity of each feature. I selected a tabbed layout, with the first tab allowing the user to find markers nearby on a map ('Explore'), the second accomodating a search and filter model ('Browse') and the third tab showing a list of Updates. Each of these tabs is fundamentally different and there is no overlap, keeping the layout as clear as possible."}</p>
              <Heading level="3" divided={true}>{"1. Explore"}</Heading>
              <p>{"The explore-tab shows pins available for the user on a map – sometimes grouped, allowing for a quick zoom-in and back out to the previous zoom level (shown below). The map shows stores added by users or digital store windows, crowds of users choosing to share their locations, GPS-pinned chats, and info-points. Some pins may include a marked area. Users can save pins, subscribing them to be notified about changes. This allows for mobile businesses like food trucks to notify regular customers on their locaiton of the day."}</p>
              <p>{"A special form of marker is the info-point. The one shown below was added by the city council for a construction site, info-points are among those markers, which may include an affected area."}</p>
              <p>{"[PLACEHOLDER FOR RESPONSIVE SIDE-SCROLL GALLERY]"}</p>
              <p>{"Users of Proximity may choose to receive push-notifications or in-app updates for changes to the map around their current location and around their home. The subscription to this service is category-based, as some users may want to know about upcoming concerts, town hall meetings and information on the subway system, but aren't interested in raod construction or temporary parking notices."}</p>
            </section>
            <section>
              <Heading level="3" divided={true}>{"2. Browse"}</Heading>
              <p>{"[PLACEHOLDER FOR FLOATING SINGLE IMAGE]"}</p>
              <p>{"The browse tab includes one promotional section on the top, followed by a grid of stores and other points of interest, sorted by distance and filtered by user preference. Each grid item may be ½ display width or ¼ and can be square or have an aspect ration of 2:1. The size depends on popularity, however businesses have the opportunity to boost their tile size by keeping theit info up to date or paying a subscription."}</p>
              <p>{"This tab allows users to 'scroll through their surroundings', without having to zoom out of a map or move a map around to see further in all directions. The further down the user scrolls, the farther away the stores and POIs are. To avoid having to scroll too far in locations with lot's of items on the map, the user has the option to filter."}</p>
              <p>{"Filter options might include the kind of entry (business, chat, crowd etc.), the category of business, priciness, popularity, and rating. A premium model is feasable, where users can scroll further down to show businesses out of range for non-paying users. Such a model might also include the possibility to select a different location for the user's profile, allowing them to peak into locaitons they are planning to visit."}</p>
            </section>
            <section>
              <Heading level="3" divided={true}>{"3. Updates"}</Heading>
              <p>{"[PLACEHOLDER FOR FLOATING SINGLE IMAGE]"}</p>
              <p>{"The updates tab is separated into two distinct categories: Service updates and chats. On top are the service updates, updates reflecting a change in the user's surroundings, below are chat messages sorted by last cantact. The updates tab is a merge of the traditional notifications list and a messages list, deleting a chat from this list will trigger a confirmation dialog, asking to delete their chat history. There is no separation between updates and conversations."}</p>
              <p>{"This mering of streams allows business chats to seamlessly integrate into the updates stream. A change to a saved pin was viewed as equally valuable as a direct or group message in surveys."}</p>
              <p>{"[PLACEHOLDER FOR FLOATING SINGLE IMAGE]"}</p>
              <p>{"All icons are custom designed for this project, including the updates icon. This icon however is the only one implementing generative design, changing the number of circles, depending on the number of updates."}</p>
              <p>{"These are examples for none, some, many, and too many:"}</p>
              <img className="float-left width-half" alt="Set of four icons, the first shwoing one large circle. The number of circles increases incrementally with each icon to symbolize an increasing number of updates. The last icon has thirteen differently sized circles, forming roughly the shape of one large circle." src="/static/proximity/rendered-all-states@3x.png" />
            </section>
          </article>
          <div className="dirtyClearfix"><p><br /></p></div>
          <Link to="/"><button className="bright">{"return to home"}</button></Link>
        </div>
      </div>
    )
  }
}
import React from "react";
import ImageGif from "../../images/gif/loading-arrow.gif"
import { Title } from "../Title/Title";
import {Link} from "react-router-dom"
import {RoomsContext} from "../Context"
import "./featuredRoom.scss"


export class FeaturedRoom  extends React.Component {
  // Get the data from the store
  static contextType = RoomsContext
  render(){
    let {featuredRooms, loaded} = this.context
    //console.log(featuredRooms)
    const featuredSection = !loaded ? featuredRooms.map((featuredRoom, index)=>{
      return(
      <div className="featured-room" key={index}>
        <div className="img-container">
        <img src={featuredRoom.images[0]}  alt="featured"/>
        <div className="price-top">
          <h6>#{featuredRoom.price}</h6>
          <p>per night</p>
        </div>
        <Link  to ={`/${featuredRoom.name}`} className="btn-primary room-link">Preview</Link>
        </div>
        <div className="room-info">{featuredRoom.name} </div>
      </div>
      )
    }):<img src={ImageGif} alt="" style={{margin: "0 auto"}} />
    
    
    return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
       <div className="featured-rooms-center">
        { featuredSection}
      </div>
      
    </section>
  );
  }
  
};

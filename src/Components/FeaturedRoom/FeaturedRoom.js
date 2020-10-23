import React from "react";
import ImageGif from "../../images/gif/loading-arrow.gif"
import { Title } from "../Title/Title";
import {SingleRoom} from "../Rooms/SingleRoom"
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
      <SingleRoom room={featuredRoom} key={index}/>
      )
    }):<img src={ImageGif} alt="img" style={{margin: "0 auto"}} />
    
    
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

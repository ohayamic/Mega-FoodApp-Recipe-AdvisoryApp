import React from "react";
import { Hero } from "../Hero/Hero";
import {Link} from "react-router-dom"
import { Banner } from "../Banner/Banner";
import { Title } from "../Title/Title";
import {RoomsContext} from "../Context"
import "./Rooms.scss"

export class Rooms extends React.Component {
  static contextType = RoomsContext
  render(){
    let {rooms} = this.context
    //console.log(rooms, sortedRooms)
    const Rooms = rooms.map((room)=>{
      return(
        <div className="room" key={room.id}>
        <div className="img-container">
        <img src={room.images[0]}  alt="featured"/>
        <div className="price-top">
          <h6>#{room.price}</h6>
        </div>
        <Link  to ="#" > <button className="btn-primary room-link">View Details</button></Link>
        </div>
        <div className="room-info">{room.name} </div>
      </div>
      )
    })
    return (
    <section>
      <Hero hero="roomsHero">
        <Banner
          title="our rooms"
          subtitle="search through our gorgious rooms "
        />
      </Hero>
      <div className="rooms">
        <Title title="search rooms"/>
        <div className="rooms-center">
            
            {Rooms}  
            </div>
      </div>
      
    </section>
  );
  }
};

import React from "react";
import { Hero } from "../Hero/Hero";
import {Filter} from "../Filter/Filter"
import {Link} from "react-router-dom"
import {SingleRoom} from "./SingleRoom"
import { Banner } from "../Banner/Banner";
import { Title } from "../Title/Title";
import {RoomsContext} from "../Context"
import "./Rooms.scss"

export class Rooms extends React.Component {
  static contextType = RoomsContext
  render(){
    let {rooms, sortedRooms} = this.context  
    
    // Get 
    const Rooms = rooms.map((room)=>{ 
      return(
        <SingleRoom  room={room} key={room.id}/>
      )
    })
    return (
    <section>
      <Hero hero="roomsHero">
        <Banner
          title="our rooms"
          subtitle="search through our gorgious rooms "
        > <Link to="/" className="btn-primary">Back to Home</Link></Banner>
      </Hero>
      <div className="rooms">
        <Title title="search rooms"/>
        <div className="rooms-center">
          <Filter />
           {sortedRooms.length===0? Rooms: <p>Sorted rooms</p>}  
        </div>
      </div>
      
    </section>
  );
  }
};

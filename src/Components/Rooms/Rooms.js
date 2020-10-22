import React from "react";
import { Hero } from "../Hero/Hero";
import { Banner } from "../Banner/Banner";
import { Title } from "../Title/Title";
import {RoomsContext} from "../Context"

export class Rooms extends React.Component {
  static contextType = RoomsContext
  render(){
    let {rooms, sortedRooms} = this.context
    console.log(rooms, sortedRooms)
    return (
    <div>
      <Hero hero="roomsHero">
        <Banner
          title="our rooms"
          subtitle="search through our gorgious rooms "
        />
      </Hero>
      <Title title="search rooms" />
    </div>
  );
  }
};

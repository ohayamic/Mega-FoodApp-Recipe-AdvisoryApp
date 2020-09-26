import React from "react";
import { Hero } from "../Hero/Hero";
import { Banner } from "../Banner/Banner";
import { Title } from "../Title/Title";

export const Rooms = () => {
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
};

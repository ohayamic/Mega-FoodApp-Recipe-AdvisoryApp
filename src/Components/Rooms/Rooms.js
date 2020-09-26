import React from "react";
import { Hero } from "../Hero/Hero";
import { Banner } from "../Banner/Banner";

export const Rooms = () => {
  return (
    <div>
      <Hero hero="roomsHero">
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        />
      </Hero>
    </div>
  );
};

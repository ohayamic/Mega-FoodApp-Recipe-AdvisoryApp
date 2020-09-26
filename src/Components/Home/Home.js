import React from "react";
import { Hero } from "../Hero/Hero";
import { Banner } from "../Banner/Banner";
import "./Home.scss";
export const Home = () => {
  return (
    <div>
      <Hero>
        {" "}
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        />
      </Hero>
    </div>
  );
};

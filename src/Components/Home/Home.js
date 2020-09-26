import React from "react";
import { Hero } from "../Hero/Hero";
import { Banner } from "../Banner/Banner";
import { Services } from "../Services/Services";
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
      <Services />
    </div>
  );
};

import React from "react";
import { Hero } from "../Hero/Hero";
import { Banner } from "../Banner/Banner";

export const About = () => {
  return (
    <div>
      <Hero>
        {" "}
        <Banner
          title="About company"
          subtitle="things about the organisation"
        />
      </Hero>
    </div>
  );
};

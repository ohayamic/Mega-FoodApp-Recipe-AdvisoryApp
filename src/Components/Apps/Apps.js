import React from "react";
import { Hero } from "../Hero/Hero";
import { Banner } from "../Banner/Banner";

export const Apps = () => {
  return (
    <div>
      <Hero>
        {" "}
        <Banner
          title="application"
          subtitle="
        Here you will find other applications"
        />
      </Hero>
    </div>
  );
};

import React from "react";
import {Title} from "../Title/Title"
import { Hero } from "../Hero/Hero";
import { Banner } from "../Banner/Banner";

export const About = () => {
  return (
    <section>
      <Hero>
        <Banner
          title="About company"
          subtitle="things to know about the App"
        />
      </Hero>

      <article style={{margin:"5rem auto"}}> 
          <Title title="application details"/>
          
      </article>
    </section>
  );
};

import React from "react";
import { Hero } from "../Hero/Hero";
import {Title} from "../Title/Title"
import { Banner } from "../Banner/Banner";

export const Apps = () => {
  return (
    <section>
      <Hero>
        {" "}
        <Banner
          title="application"
          subtitle="
        Here you will find other applications"
        />
      </Hero>
      <article style={{margin:"100px auto"}}> 
          <Title title="application details"/>
      </article>
    </section>
  );
};

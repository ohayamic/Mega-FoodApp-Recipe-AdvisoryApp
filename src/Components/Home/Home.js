import React from "react";
import {Link} from "react-router-dom"
import { Hero } from "../Hero/Hero";
import { Banner } from "../Banner/Banner";
import { Services } from "../Services/Services";
import { FeaturedRoom } from "../FeaturedRoom/FeaturedRoom";
import {Footer} from "../Footer"

import "./Home.scss";
export const Home = () => {
  return (
    <div>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at #299"
        ><Link to="/rooms" className="btn-primary">Our Rooms</Link></Banner>
        
      </Hero>
      <Services />
      <FeaturedRoom />
      <Footer />

    </div>
  );
};

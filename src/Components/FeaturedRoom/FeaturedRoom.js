import React from "react";
import { Title } from "../Title/Title";

// change this

export const FeaturedRoom = () => {
  return (
    <section className="services">
      {/* The title component takes a prop*/}
      <Title title="featured rooms" />
      <div className="services-center">
        {/*Here goes the mapped list for display */}
      </div>
    </section>
  );
};

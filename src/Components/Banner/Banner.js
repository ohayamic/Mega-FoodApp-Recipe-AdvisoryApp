import React from "react";
import "./Banner.scss";
export const Banner = ({ title, subtitle, children }) => {
  return (
    <section className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </section>
  );
};

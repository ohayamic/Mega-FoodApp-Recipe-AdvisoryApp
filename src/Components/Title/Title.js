import React from "react";
import "./Title.scss";
export const Title = ({ title }) => {
  return (
    <section className="section-title">
      <h4>{title}</h4>
      <div></div>
    </section>
  );
};

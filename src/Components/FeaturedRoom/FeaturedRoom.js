import React from "react";
import { Title } from "../Title/Title";

// change this
const featured = [
  {
    id: 1,
    img: <i className="fas fa-cocktail"></i>,
    title: "cocktail",
    text:
      "A cocktail is an alcoholic mixed drink, which is either a combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream. There are various types of cocktails, based on the number and kind of ingredients added.",
  },
  {
    id: 2,
    img: <i className="fas fa-hiking"></i>,
    title: "endless hiking",
    text:
      "With currently 93,647 hiking routes all around Germany there are plenty of options for outdoor enthusiasts. In total 85,303 hikes, 2,871 long-distance hikes, 1,630 pilgrim walks and 3,843 others are waiting to be explored. We know it’s hard to pick one, so here’s an overview of some of the best hiking routes around Germany.",
  },
  {
    id: 3,
    img: <i className="fas fa-shuttle-van"></i>,
    title: "free shuttle",
    text:
      "The Space Shuttle was a partially reusable low Earth orbital spacecraft system operated from 1981 to 2011 by the National Aeronautics and Space Administration (NASA) as part of the Space Shuttle program. Its official program name was Space Transportation System (STS), taken from a 1969 plan for a system of reusable spacecraft where it was the only item funded for development.",
  },
  {
    id: 4,
    img: <i className="fas fa-beer"></i>,
    title: "strongest beer",
    text:
      "Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea. Beer is brewed from cereal grains—most commonly from malted barley, though wheat, maize, and rice are also used.",
  },
];

export const FeaturedRoom = () => {
  return (
    <section className="services">
      <Title title="featured rooms" />
      <div className="services-center"></div>
    </section>
  );
};

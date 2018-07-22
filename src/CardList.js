import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardsArray = robots.map((user, i) => (
    <Card key={i} name={user.name} email={user.email} id={user.id} />
  ));

  return <div className="tc">{cardsArray}</div>;
};

export default CardList;

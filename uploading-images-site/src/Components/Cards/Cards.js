import React from "react";
import { mockjsondb } from "./mockjsondb";
import "./cards.css";

export const Cards = () => {
  return (
    <div className="main-card-container">
      {mockjsondb.map((cars, i) => {
        return (
          <div key={i} className="card-container">
            <img src={cars.image} alt={cars.name} className="car-image"></img>
            <h3 className="car-name">{cars.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

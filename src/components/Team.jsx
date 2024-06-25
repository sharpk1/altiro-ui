import React from "react";
import CustomCard from "./CustomCard";
import "./team.css";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div>
          <h2>Portfolio</h2>
          <p>Our Work - Driving Innovation</p>
        </div>
        <div className="team-row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-lg-4 col-md-6 col-sm-12 team"
                >
                  <CustomCard info={d} />
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./Masthead.css";

function Masthead() {
  return (
    <>
      <div className="container-fluid halaman">
        <div class="container" style={{ borderRadius: "10px", padding: "1rem" }}>
          <div class="flex justify-content items-center">
            <div>
              <img src={"https://see.fontimg.com/api/renderfont4/K7axe/eyJyIjoiZnMiLCJoIjoxMTYsInciOjEyNTAsImZzIjo5MywiZmdjIjoiIzEyMTIxMiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/QmFieSBDYXJl/hugh-is-life-personal-use-italic.png"} alt="" />
              <br />
              <img src={"https://see.fontimg.com/api/renderfont4/gv11/eyJyIjoiZnMiLCJoIjo1MSwidyI6MTI1MCwiZnMiOjQxLCJmZ2MiOiIjMTIxMjEyIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/eW91ciBiYWJ5IHNvbHV0aW9ucw/cookiemonster.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Masthead;

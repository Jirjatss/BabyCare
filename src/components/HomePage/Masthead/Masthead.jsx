import React from "react";
import "./Masthead.css";

function Masthead() {
  return (
    <>
      <div className="container-fluid halaman">
        <div class="container" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "10px", padding: "1rem" }}>
          <div class="flex justify-content items-center">
            <div>
              <h1 style={{ color: "whitesmoke" }}>BABY CARE</h1>
              <h3 style={{ color: "whitesmoke" }}>Your Baby Solution</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Masthead;

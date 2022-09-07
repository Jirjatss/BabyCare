import React from "react";
import "./Masthead.css";

function Masthead() {
  return (
    <>
      <div className="container halaman">
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "10px", padding: "1rem" }}>
          <div class="container mx-auto px-24">
            <div class="flex justify-left items-center h-full">
              <div class="text-left text-black mb-48 b-11 px-6 md:px-12">
                <h1 class="text-5xl font-bold mt-0 mb-6" style={{ color: "whitesmoke" }}>
                  BABY CARE
                </h1>
                <h3 class="text-3xl font-bold mb-8" style={{ color: "whitesmoke" }}>
                  Your Baby Solution
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Masthead;

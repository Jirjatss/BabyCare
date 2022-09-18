import React from "react";
import "./Maps.css";
import { Link } from "react-router-dom";
function Maps() {
  return (
    <>
      <div className="mt-24 pt-40 right-0 bottom-0 left-0 w-full h-full overflow-hidden" id="contact">
        <div className="container mx-auto px-24">
          <div className="flex justify-center items-center h-full">
            <div className="text-left text-black mb-28 b-11 px-6 md:px-12">
              <Link to={"//goo.gl/maps/YKszoqVWqPn8uwNc8"}>
                <button className="noselect maps" type="button">
                  Lokasi Kami
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maps;

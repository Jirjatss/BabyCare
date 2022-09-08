import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <section id="footer">
        <footer class="footer text-center fixed-bottom">
          <div class="container px-2 pt-2">
            <div class="d-flex justify-content-center">
              <div class="ml-36">
                <img style={{ width: 40 }} class="text-left" src={require("../../assets/brand.png")} alt="" />
              </div>
              <div class="text-center">© 2022 Copyright : Baby Care</div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;

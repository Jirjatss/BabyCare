import CardTeam from "../CardTeam/CardTeam";
import React from "react";
import "./OurTeam.css";

function OurTeam() {
  return (
    <>
      <section className="page-section" id="ourteam">
        <div className="container">
          <div className="text-center">
            <h2 id="tagline" className="section-heading">
              Tim Terbaik
            </h2>
            <h5 className="section-subheading">Kenalan dulu sama Pegawainya</h5>
            <hr />
          </div>
          <div className="row d-flex justify-content-between">
            <div className="col-lg-4 col-sm-6 mb-4">
              <CardTeam
                nama={"Hijir Sajad"}
                role={"Dokter"}
                url={"https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/sajad.JPG"}
                wa={"https://wa.me/6281233623106"}
                ig={"https://www.instagram.com/Jirjatss/"}
                fb={"https://www.facebook.com/profile.php?id=100076359733301"}
              />
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <CardTeam
                nama={"Riska Amalia"}
                role={"Assisten Dokter"}
                url={require("../../../assets/Riska.webp")}
                wa={"https://wa.me/6287898525530"}
                ig={"https://www.instagram.com/invites/contact/?i=14sjwy7aj9yzu&utm_content=1fgw585"}
                fb={"https://www.facebook.com/riskaamala0898"}
              />
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <CardTeam
                nama={"Achmad Ghufran"}
                role={"Mantri"}
                url={"https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/Ghufron.PNG"}
                wa={"https://wa.me/6285238035370"}
                ig={"https://www.instagram.com/Jirjatss/"}
                fb={"https://www.facebook.com/profile.php?id=100076359733301"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurTeam;

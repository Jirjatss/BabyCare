import CardTeam from "../CardTeam/CardTeam";

import "./OurTeam.css";

function OurTeam() {
  return (
    <>
      <section class="page-section" id="ourteam">
        <div class="container">
          <div class="text-center">
            <h2 id="tagline" class="section-heading">
              Tim Terbaik
            </h2>
            <h5 class="section-subheading">Kenalan dulu sama Pegawainya</h5>
            <hr />
          </div>
          <div class="row d-flex justify-content-between">
            <div class="col-lg-2 col-sm-6 mb-4">
              <CardTeam nama={"Hijir Sajad"} role={"Dokter"} url={"https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/sajad.JPG"} />
            </div>
            <div class="col-lg-2 col-sm-6 mb-4">
              <CardTeam nama={"Riska Amalia"} role={"Assisten Dokter"} url={"https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/Riska.PNG"} />
            </div>
            <div class="col-lg-2 col-sm-6 mb-4">
              <CardTeam nama={"Achmad Ghufran"} role={"Mantri"} url={"https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/Ghufron.PNG"} />
            </div>
            <div class="col-lg-2 col-sm-6 mb-4">
              <CardTeam nama={"Dwi Wahyuni"} role={"Bidan"} url={"https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/Dwi.PNG"} />
            </div>
            <div class="col-lg-2 col-sm-6 mb-4">
              <CardTeam nama={"Bayu"} role={"Office Boy"} url={"https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/Bayu.PNG"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurTeam;

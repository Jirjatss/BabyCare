import CardTeam from "../CardTeam/CardTeam";

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
            <div className="col-lg-2 col-sm-6 mb-4">
              <CardTeam nama={"Hijir Sajad"} role={"Dokter"} url={"https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/sajad.JPG"} />
            </div>
            <div className="col-lg-2 col-sm-6 mb-4">
              <CardTeam nama={"Riska Amalia"} role={"Assisten Dokter"} url={"https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/Riska.PNG"} />
            </div>
            <div className="col-lg-2 col-sm-6 mb-4">
              <CardTeam nama={"Achmad Ghufran"} role={"Mantri"} url={"https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/Ghufron.PNG"} />
            </div>
            <div className="col-lg-2 col-sm-6 mb-4">
              <CardTeam nama={"Dwi Wahyuni"} role={"Bidan"} url={"https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/Dwi.PNG"} />
            </div>
            <div className="col-lg-2 col-sm-6 mb-4">
              <CardTeam nama={"Bayu"} role={"Office Boy"} url={"https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/Bayu.PNG"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurTeam;

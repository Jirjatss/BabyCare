import React from "react";
import "./About.css";
import Gambar from "../../../assets/terpercaya.png";
import Gambar1 from "../../../assets/FastRespond.png";
import Gambar2 from "../../../assets/Terlengkap.png";
function About() {
  return (
    <>
      <section class="page-section" id="About">
        <div class="container">
          <div class="text-center">
            <h1 id="tagline" class="section-heading">
              Kelebihan Kami
            </h1>
            <h5 class="section-subheading">Mengapa harus kami?</h5>
            <hr />
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <div class="px-3 drop-shadow-lg">
                <div data-aos="fade-right" data-aos-duration="3000">
                  <img src={Gambar} alt="" className="gambarabout" />
                  <h4 class="my-3">Terpecaya</h4>
                  <p class="text">Pelayanan yang kami berikan, dapat terjamin 100% kualitasnya, mulai dari dokter yang bersertifikat dan ahli dalam bidangnya, serta pegawai yang handal dalam situasi apapun</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="px-3 drop-shadow-lg">
                <div data-aos="fade-right" data-aos-duration="3000">
                  <img src={Gambar1} alt="" className="gambarabout" />
                  <h4 class="my-3">Fast Respond</h4>
                  <p class="text">Anda tidak perlu lagi merasa takut jikalau kondisi bayi anda segera membutuhkan pertolongan. Layanan kami akan selalu siap 24 Jam per hari untuk melayani anda.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="px-3 drop-shadow-lg">
                <div data-aos="fade-right" data-aos-duration="3000">
                  <img src={Gambar2} alt="" className="gambarabout" />
                  <h4 class="my-3">Terlengkap</h4>
                  <p class="text">layanan terpadu untuk semua kebutuhan bayi kesayangan kamu. Kami menyediakan layanan dokter, konsultasi online, vaksinasi, penitipan bayi, dan babyshop.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

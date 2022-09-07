import React from "react";
import CardServices from "../CardServices/CardServices";
import "./Services.css";

function Services() {
  return (
    <>
      <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
        <div id="services" class="text-center mt-24">
          <div class="text-center">
            <h1 id="tagline" class="section-heading">
              Services
            </h1>
            <h5 class="section-subheading text-muted">Kasih sayang terbaik tehadap bayi anda</h5>
            <hr />
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
              <a class="Populer-link" data-bs-toggle="modal" href="">
                <div class="Populer-hover">
                  <div class="Populer-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
              </a>
              <CardServices nama={"Konsultasi"} url={"https://img.freepik.com/free-photo/baby-visiting-hospital-with-mom_1098-21198.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196"} />
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <a class="Populer-link" data-bs-toggle="modal" href="">
                <div class="Populer-hover">
                  <div class="Populer-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
              </a>
              <CardServices nama={"Baby Spa"} url={"https://img.freepik.com/free-photo/two-month-baby-girl-n-bath_1398-803.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196"} />
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <a class="Populer-link" data-bs-toggle="modal" href="">
                <div class="Populer-hover">
                  <div class="Populer-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
              </a>
              <CardServices nama={"Penitipan Anak"} url={"https://www.homydaycare.com/wp-content/uploads/2020/06/40141547_1965863106806360_238915295371067392_n.jpg"} />
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <a class="Populer-link" data-bs-toggle="modal" href="">
                <div class="Populer-hover">
                  <div class="Populer-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
              </a>
              <CardServices nama={"Baby Shopping"} url={"https://img.freepik.com/free-photo/woman-with-child-grocery-store-buying-products_1303-29209.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196"} />
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <a class="Populer-link" data-bs-toggle="modal" href="#buah-9">
                <div class="Populer-hover">
                  <div class="Populer-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
              </a>
              <CardServices nama={"MPASI"} url={"https://img.freepik.com/free-photo/view-baby-food-bowls_23-2148580378.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196"} />
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
              <a class="Populer-link" data-bs-toggle="modal" href="#buah-9">
                <div class="Populer-hover">
                  <div class="Populer-hover-content">
                    <i class="fas fa-plus fa-3x"></i>
                  </div>
                </div>
              </a>
              <CardServices nama={"Posyandu"} url={"https://diskominfo.kaltaraprov.go.id/wp-content/uploads/2021/04/IMG-20210405-WA0035-1024x682.jpg"} />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <a class="Populerbtn" href="/">
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

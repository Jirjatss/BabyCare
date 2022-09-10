import React from "react";
import CardServices from "../CardServices/CardServices";
import "./Services.css";

function Services() {
  const user = localStorage.getItem("token");
  return (
    <>
      <div id="containerservices">
        <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <div id="services">
            <div className="text-center">
              <h1 id="tagline" className="section-heading">
                Services
              </h1>
              <h5 className="section-subheading">Kasih sayang terbaik tehadap bayi anda</h5>
              <hr />
            </div>
          </div>

          <div className="container">
            <div className="row">
              <CardServices nama={"Konsultasi"} url={"https://img.freepik.com/free-photo/baby-visiting-hospital-with-mom_1098-21198.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196"} />
              <CardServices nama={"Baby Spa"} url={"https://img.freepik.com/free-photo/two-month-baby-girl-n-bath_1398-803.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196"} />
              <CardServices nama={"Baby Shop"} url={"https://i.pinimg.com/originals/95/a3/b3/95a3b377efcf3160297c69777bb4b831.jpg"} />
              <CardServices nama={"Posyandu"} url={"https://diskominfo.kaltaraprov.go.id/wp-content/uploads/2021/04/IMG-20210405-WA0035-1024x682.jpg"} />
              <CardServices nama={"MPASI"} url={"https://img.freepik.com/free-photo/view-baby-food-bowls_23-2148580378.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196"} />
              <CardServices nama={"Playground"} url={"https://www.homydaycare.com/wp-content/uploads/2020/06/40141547_1965863106806360_238915295371067392_n.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;

import AOS from "aos";
import "aos/dist/aos.css";
import { Instagram, Facebook, Whatsapp } from "react-bootstrap-icons";

function CardTeam(props) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  AOS.init();

  return (
    <>
      <div data-aos="flip-up" data-aos-duration="2000">
        <div className="team-member" style={{ textAlign: "center" }}>
          <div class="bg-white rounded shadow-sm py-5 px-4">
            <img src={props.url} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
            <h4 class="mb-0">{props.nama}</h4>
            <span class="large">{props.role}</span>
            <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item">
                <button onClick={() => openInNewTab(props.ig)} class="social-link">
                  <Instagram color="royalblue" size={96} />
                </button>
              </li>
              <li class="list-inline-item">
                <button onClick={() => openInNewTab(props.wa)} class="social-link">
                  <Whatsapp color="royalblue" size={96} />
                </button>
              </li>
              <li class="list-inline-item">
                <button onClick={() => openInNewTab(props.fb)} class="social-link">
                  <Facebook color="royalblue" size={96} />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardTeam;

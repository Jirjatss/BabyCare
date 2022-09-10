import AOS from "aos";
import "aos/dist/aos.css";

function CardTeam(props) {
  AOS.init();

  return (
    <>
      <div data-aos="flip-right" data-aos-duration="2000">
        <div className="team-member" style={{ textAlign: "center" }}>
          <img className="mx-auto rounded-circle" src={props.url} alt="..." />
          <h4>{props.nama}</h4>
          <p className="text-black font-semibold  italic">{props.role}</p>
        </div>
      </div>
    </>
  );
}

export default CardTeam;

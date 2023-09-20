import Paragraf from "../global/paragraf";
import "./services.css";

function service(props) {
  return (
    <>
      <div className="service">
        <img src={props.src} alt="Service image" className="ser-pic" />
        <h3 className="ser-name"> {props.name}</h3>

        <Paragraf content={props.content} className="ser-prg" />
      </div>
    </>
  );
}

export default service;

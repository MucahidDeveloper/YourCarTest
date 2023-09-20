import BackgroundImg from "../../img/aboutpic.png";
import SectionImg from "../../img/aboutpic2.png";
import SectionHead from "../global/sectionhead";
import Paragraf from "../global/paragraf";
import "./about.css";
function about() {
  return (
    <>
      <div className="flex container aboutCont">
        <div className="textContent">
          <SectionHead id="About us" color="red" />
          <Paragraf
            content="
          YourCar is a luxury car dealership that offers a personalized and
          first-class experience to its clients. Our team of experienced
          professionals is dedicated to providing exceptional service and
          finding the perfect vehicle to match our clients' unique preferences
          and requirements. We have an extensive selection of high-end vehicles,
          ranging from sports cars to SUVs, all of which are maintained to the
          highest standards of quality and safety."
          ></Paragraf>
          <Paragraf
            content="
          At YourCar, we are committed to creating a stress-free and enjoyable
          car buying experience. We understand that purchasing a luxury car can
          be a significant investment, which is why we offer flexible financing
          options to make the process more manageable. Our team is available to
          answer any questions and provide guidance throughout the entire buying
          process. We take pride in our outstanding customer service and
          attention to detail, and we are confident that our clients will be
          satisfied with their experience at YourCar."
          ></Paragraf>
        </div>
        <div className="imgContainer">
          <img src={BackgroundImg} alt="Background of About sections image" />
          <img
            src={SectionImg}
            alt="image of About section"
            className="about-img"
          />
        </div>
      </div>
    </>
  );
}

export default about;

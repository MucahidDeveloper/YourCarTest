import "./Hero.css";
import ArrowBtn from "./arrow";
function hero() {
  return (
    <header className="">
      <div className="headerContainer">
        <h1 className="headLine">Find the Perfect Car for You at YourCar.</h1>
        <p className="altText">
          We offer a wide range of cars that cater to your needs and budget.
          Visit us today and drive away with your dream car!
        </p>
        <button className="actionBtn">
          Discover <ArrowBtn />
        </button>
      </div>
    </header>
  );
}

export default hero;

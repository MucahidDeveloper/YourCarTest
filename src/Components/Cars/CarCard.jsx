import "./cars.css";
import Car1 from "../../img/car1.png";
import { seatsIcn as SeatsIcn, luggageIcn as LuggageIcn } from "./FeaturesIcns";
import Paragraf from "../global/paragraf";

function carCard(props) {
  return (
    <div className="cardContainer flex container">
      <img className="carImg" src={Car1} alt="Car1" />
      <h3 className="carName">Tesla MODEL S</h3>
      <h5 className="carSubName">Electric Car</h5>
      <Paragraf content="Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore Lore " />
      <div className="cardFooter container">
        <div className="car-features flex container">
          <div className="seats-con flex">
            <SeatsIcn className="carIcn" />
            <Paragraf content="4 Seats" />
          </div>
          <div className="luggage-con flex">
            <LuggageIcn className="carIcn" />
            <Paragraf content="4 Luggage" />
          </div>
        </div>
        <div className="buy-con flex">
          <button className="lessBtn flex">-</button>
          <Paragraf content="0" />
          <button className="addBtn flex">+</button>
        </div>
      </div>
    </div>
  );
}

export default carCard;

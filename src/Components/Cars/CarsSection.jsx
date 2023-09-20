import SectionName from "../global/sectionhead";
import CarCard from "./CarCard";
import Scroll from "./Scroll";

function carsSection() {
  // const response = await fetch("../../data/data.json");
  // const data = await JSON.parse(response);
  // const carsList = data.cars;
  // console.log(carsList);
  return (
    <div className="Cars-section">
      <SectionName id="Cars" color="red" />
      <CarCard />
      {/* <div className="flex container cars-container">
        {carsList.map((car, index) => (
          <>
            <CarCard
              key={index}
              name={car.name}
              class={car.class}
              description={car.description}
              seats={car.seats}
              luggage={car.luggage}
              image={car.image}
            />
            <Scroll id={index} />
          </>
        ))}
      </div> */}
      {/* ; */}
    </div>
  );
}

export default carsSection;

import SectionName from "../global/sectionhead";
import Service from "./SingleServece";
import servicesList from "./ServicesArray";

function servicesSection() {
  return (
    <div className="Serv-section">
      <SectionName id="Services" color="blue" />
      <div className="flex container ser-container">
        {servicesList.map((service, index) => (
          <Service
            key={index}
            src={service.img}
            name={service.name}
            content={service.content}
          />
        ))}
      </div>
    </div>
  );
}

export default servicesSection;

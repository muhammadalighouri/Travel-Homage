import React from "react";
import WholeSale from "../components/WholeSale";
import "../scss/WholeSalePage.scss";
import img1 from "../assests/Sale.2.jpg";
import img2 from "../assests/Sale.1.jpg";
import img3 from "../assests/Sale.3.jpg";
import Navigation from "../components/Navigation";
const WholeSalePage = () => {
  window.scroll(0, 0)
  return (
    <>
      <Navigation />
      <section id="wholesalepage">
        <div className="heading">
          <h1 data-aos="fade-up">Wholesale/Supply </h1>
        </div>
        <div className="container1">
          <WholeSale
            reverse={false}
            img={img1}
            heading={"solar panels: "}
            description={
              "A solar cell panel, solar electric panel, or solar panel, also known as a photo-voltaic (PV) module or PV panel, is an assembly of photovoltaic solar cells mounted in a (usually rectangular) frame. Solar panels capture sunlight as a source of radiant energy, which is converted into electric energy in the form of direct current (DC) electricity. A neatly organised collection of solar panels is called a photovoltaic system or solar array. Arrays of a photovoltaic system can be used to generate solar electricity that supplies electrical equipment directly, or feeds power back into an alternate current (AC) grid via an inverter system.In 1839, the ability of some materials to create an electrical charge from light exposure was first observed by the French physicist Edmond Becquerel.[1] Though these initial solar panels were too inefficient for even simple electric devices, they were used as an instrument to measure light.[2] "
            }
          />
          <WholeSale
            reverse={true}
            img={img2}
            heading={"Ev chargers:"}
            description={
              "A charging station, also known as a charge point or electric vehicle supply equipment (EVSE), is a piece of equipment that supplies electrical power for charging plug-in electric vehicles (including electric cars, electric trucks, electric buses, neighborhood electric vehicles, and plug-in hybrids). * There are two main types: AC charging stations and DC charging stations. Batteries can only be charged with direct current (DC) electric power, while most electricity is delivered from the power grid as alternating current (AC). For this reason, most electric vehicles have a built-in AC-to-DC converter, commonly known as the 'onboard charger'. At an AC charging station, AC power from the grid is supplied to this onboard charger, which produces DC power to charge the battery. DC chargers facilitate higher power charging (which requires much larger AC-to-DC converters) by building the converter into the charging station instead of the vehicle to avoid size and weight restrictions. The station then supplies DC power to the vehicle directly, bypassing the onboard converter. Most fully electric car models can accept both AC and DC power.Charging stations provide connectors that conform to a variety of international standards. "
            }
          />
          <WholeSale
            reverse={false}
            img={img3}
            heading={"Electrical products and accessories"}
            description={
              "The items used in domestic and industrial electrical wiring are called electrical accessories :switch, holder, socket, plug-top, ceiling rose, fuse cut-out etc. A switch is used to make a circuit ON and OFF. A holder is used with a lamp, a ceiling rose is used with a ceiling fan, tube light or a pendant lamp."
            }
            list={[
              "       Conduits & bends",
              "  2. AC Conduits",
              "    3. Switch boxes",
              "4. Light boxes",
              "5. Fan boxes",
              "6. Junction boxes",
              "              7. Wires",
              " 8. Switches & Plates",
              '              9. MCBs"',
            ]}
          />
        </div>
      </section>
    </>
  );
};

export default WholeSalePage;

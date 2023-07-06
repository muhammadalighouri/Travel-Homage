import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import first from "../assests/Photo car.png";
import "../scss/fleet.scss";
import f1 from "../assests/Fleet/Categries.png";
import f2 from "../assests/Fleet/Multiple options.png";
import f3 from "../assests/Fleet/New Models.png";
import f4 from "../assests/Fleet/i.11.png";
import f5 from "../assests/Fleet/i.22.png";
import CarD from "../components/CarD";
import field from "../assests/Fleet/Field.png";
import Navigate from "../components/Navigate";
import FleetSide from "../components/FleetSide";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../Redux/actions/carActions";
import { fetchFilters } from "../Redux/actions/filterActions";
const Fleet = () => {
  const [display, setDisplay] = useState(false);
  const cars = useSelector((state) => state.Cars) || {}
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
    dispatch(fetchFilters());
  }, []);

  return (
    <>
      <Navigation nav={[]} />
      <Banner text={"اسطولنا"} img={first} p={true} />
      <section id="fleet">
        <div className="container">
          <div className="top-main">
            <div className="first">
              <img src={f1} alt="" />
              <img src={f2} alt="" />
              <img src={f3} alt="" />
            </div>
            <div className="second">
              حن نعتبر واحدة من أكثر شركات تأجير السيارات ثقة في المملكة العربية
              السعودية ، حيث لدينا أسطول كبير من السيارات ، بما في ذلك السيارات
              الاقتصادية وسيارات السيدان والسيارات العائلية والمركبات الفاخرة.
              بخيارات متعددة تلبي كافة متطلبات كافة شرائح المجتمع.
            </div>
          </div>
          <div className="grid-box" id="cars">

            <div className="flex-wrap">

              <CarD />

              <FleetSide />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Fleet;

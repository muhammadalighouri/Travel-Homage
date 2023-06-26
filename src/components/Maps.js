import React, { useState, useEffect } from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import phone from "../assests/phone.png";
import watch from "../assests/watch.png";
import down from "../assests/down.png";
import ico1 from "../assests/ico1.png";
import ico2 from "../assests/ico2.png";
import ico3 from "../assests/ico3.png";
import Select from "react-select";
import "../scss/map.scss";
const containerStyle = {
  height: "466px",
  width: "620px",
  borderRadius: "30px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const data = [
  {
    city: "الشفا لبن",
    branch: "لبن ظھرة لبن شارع نجد بجوار العثیم",
    year: "",
    month: "",
    lat: "24.631012",
    lng: "46.563794",

    branchNumber: "",
    detailedAddress: "عالشفا لبن ظھرة لبن شارع نجد بجوار العثیم",
    branchMobile: "592891678"
  },

];
function Maps() {
  const [location, setLocation] = useState(center);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [cities, setCities] = useState([]);
  const [branches, setBranches] = useState([]);

  // This useEffect will run once after the component is mounted
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        console.log(location);
      }, (error) => {
        console.log(error);
      });
    }
  }, []);


  useEffect(() => {
    const uniqueCities = Array.from(new Set(data.map((item) => item.city))).map(
      (city) => {
        return { value: city, label: city };
      }
    );
    setCities(uniqueCities);
  }, []);

  useEffect(() => {
    if (selectedCity) {
      const branchesInCity = data
        .filter((item) => item.city === selectedCity.value)
        .map((item) => {
          return {
            value: item.branch,
            label: item.branch,
            lat: item.lat,
            lng: item.lng,
          };
        });
      setBranches(branchesInCity);
    } else {
      setBranches([]);
      setSelectedBranch(null);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedBranch) {
      setLocation({
        lat: parseFloat(selectedBranch.lat),
        lng: parseFloat(selectedBranch.lng),
      });
    }
  }, [selectedBranch]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAgPZjd32fLLGuiKK0tNpLmqhqEoEBOSG0">
      <div className="map">
        <div className="container__">
          <div className="grid">
            <div className="start">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={15}
              >
                <Marker position={location} />
              </GoogleMap>
            </div>
            <div className="info">
              <div className="item">
                <label htmlFor="">المدينة</label>
                <div className="dropdown">
                  <div className="icon">
                    <Select
                      placeholder={"اختر مدينة"}
                      className="select"
                      options={cities}
                      value={selectedCity}
                      onChange={setSelectedCity}
                    />
                  </div>
                </div>
              </div>
              <div className="item">
                <label htmlFor="">الفرع</label>
                <div className="dropdown">
                  <div className="icon">
                    <Select
                      placeholder={"اختر فرعًا"}
                      className="select"
                      options={branches}
                      value={selectedBranch}
                      onChange={setSelectedBranch}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            {selectedBranch && (
              <>
                <div className="item">
                  <div className="end">
                    <h4>{selectedBranch.value}</h4>
                    <p>
                      {
                        data.find(
                          (item) => item.branch === selectedBranch.value
                        ).detailedAddress
                      }
                    </p>
                  </div>
                </div>
                <div className="item">
                  <img src={phone} alt="" />
                  <div className="end">
                    {" "}
                    <p>
                      {
                        data.find(
                          (item) => item.branch === selectedBranch.value
                        ).branchMobile
                      }
                    </p>
                  </div>
                </div>
                {/* Here you need to have the opening hours data as well*/}
                <div className="item">
                  <div className="icon">
                    <img src={watch} alt="" />
                  </div>
                  <div className="end">
                    {" "}
                    <h4>الأحد إلى الخميس</h4>
                    <p>9:00 صباحًا - 11:00 مساءً</p>
                  </div>
                </div>

                <div className="item">
                  <div className="end">
                    <h4>الجمعة - السبت</h4>
                    <p>4:00 مساءً - 11:00 مساءً</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </LoadScript>
  );
}

export default React.memo(Maps);

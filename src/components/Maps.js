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
  {
    city: "الموسى",
    branch: "طویق شارع أحمد بن الخطاب",
    year: "",
    month: "",
    lat: "24.560663",
    lng: "46.553860",
    branchNumber: "",
    detailedAddress: "الموسى طویق شارع أحمد بن الخطاب",
    branchMobile: "594850304"
  },
  {
    city: "مخرج 28",
    branch: "مخرج 28 حي السویدي مخرج 28",
    year: "",
    month: "",
    lat: "24.575262",
    lng: "46.606903",
    branchNumber: "",
    detailedAddress: "مخرج 28 حي السویدي مخرج 28",
    branchMobile: "592891608"
  },
  {
    city: "قرطبة",
    branch: "طریق الدمام حي قرطبة مخرج 8",
    year: "",
    month: "",
    lat: "24.804490",
    lng: "46.749705",
    branchNumber: "",
    detailedAddress: "قرطبة طریق الدمام حي قرطبة مخرج 8",
    branchMobile: "596050250"
  },
  {
    city: "1 خریص",
    branch: "طریق مكة المكرمة الفرعي اتجاة الغرب",
    year: "",
    month: "",
    lat: "24.698278",
    lng: "46.735250",
    branchNumber: "",
    detailedAddress: "خریص 1 خریص - طریق مكة المكرمة الفرعي اتجاة الغرب",
    branchMobile: "580954620"
  },
  {
    city: "خریص - 2",
    branch: "طریق مكة المكرمة الفرعي اتجاة الشرق",
    year: "",
    month: "",
    lat: "",
    lng: "",
    branchNumber: "221201LS",
    detailedAddress: "خریص - 2 221201LS خریص - طریق مكة المكرمة الفرعي اتجاة الشرق",
    branchMobile: ""
  },
  {
    city: "المروج",
    branch: "طریق الدمام حي المروج امام أبیات",
    year: "",
    month: "",
    lat: "24.766876",
    lng: "46.662193",
    branchNumber: "230101LS",
    detailedAddress: "المروج 230101LS طریق الدمام حي المروج امام أبیات",
    branchMobile: "581086365"
  },
  {
    city: "لبن",
    branch: "شارع طیبة تقاطع شارع نجد الشرقیة",
    year: "",
    month: "",
    lat: "",
    lng: "",
    branchNumber: "230202LS",
    detailedAddress: "لبن - 2 230202LS شارع طیبة تقاطع شارع نجد الشرقیة",
    branchMobile: ""
  },
  {
    city: "حي الاتصالات",
    branch: "الدمام42 طریق الأمیر نایف حي الاتصالات شارع",
    year: "",
    month: "",
    lat: "",
    lng: "",
    branchNumber: "20LS",
    detailedAddress: "حي الاتصالات 20LS الدمام42 طریق الأمیر نایف حي الاتصالات شارع",
    branchMobile: "581337594"
  },
  {
    city: "الدمام",
    branch: "طریق الملك فھد حي العزیزیة العزیزیة – حي الخزامة",
    year: "",
    month: "",
    lat: "26.416529",
    lng: "50.081421",
    branchNumber: "230301LS",
    detailedAddress: "الدمام 230301LS الدمام طریق الملك فھد حي العزیزیة العزیزیة – حي الخزامة",
    branchMobile: "595012042"
  },
  {
    city: "الجبیل",
    branch: "الجبیل البلد شارع المدینة",
    year: "",
    month: "",
    lat: "27.004368",
    lng: "49.657269",
    branchNumber: "",
    detailedAddress: "الجبیل الجبیل البلد شارع المدینة",
    branchMobile: "595134170"
  },
  {
    city: "الإحساء",
    branch: "طریق الملك عبد الله حي غرناطة",
    year: "",
    month: "",
    lat: "25.335897",
    lng: "49.548782",
    branchNumber: "22LS",
    detailedAddress: "الإحساء 22LS طریق الملك عبد الله حي غرناطة",
    branchMobile: "582046560"
  },
  {
    city: "الجنوبیة",
    branch: "مطار جازان داخل مطار جازان",
    year: "",
    month: "",
    lat: "",
    lng: "",
    branchNumber: "",
    detailedAddress: "الجنوبیة مطار جازان داخل مطار جازان",
    branchMobile: "594839625"
  },
  {
    city: "طریق المدینة",
    branch: "طریق المدینة شارع حي الروضة",
    year: "",
    month: "",
    lat: "21.569984",
    lng: "39.168758",
    branchNumber: "20LS",
    detailedAddress: "طریق المدینة شارع حي الروضة ",
    branchMobile: "581341239"
  },

  {
    city: "شارع السبعین",
    branch: "شارع السبعین حي النزھة",
    year: "",
    month: "",
    lat: "21.621066",
    lng: "39.184842",
    branchNumber: "20LS",
    detailedAddress: "شارع السبعین 20LS طریق الأمیر ماجد شارع السبعین حي النزھة",
    branchMobile: "581341661"
  },
  {
    city: "مطار الطائف",
    branch: "داخل مطار الطائف",
    year: "",
    month: "",
    lat: "",
    lng: "",
    branchNumber: "",
    detailedAddress: "مطار الطائف داخل مطار الطائف",
    branchMobile: "594836451"
  },
  {
    city: "مكة المكرمة",
    branch: "حي النزھة شارع فلسطین",
    year: "",
    month: "",
    lat: "21.436057",
    lng: "39.796101",
    branchNumber: "230203LS",
    detailedAddress: "مكة المكرمة حي النزھة شارع فلسطین 230203LS مجمع الجمجوم الجدید",
    branchMobile: ""
  },
  {
    city: "شارع فلسطین",
    branch: "بحي الحمدانیة الشارع العام یحتاج تحدیث الموقع",
    year: "",
    month: "",
    lat: "21.534833",
    lng: "39.213222",
    branchNumber: "230203LS",
    detailedAddress: "مجمع الجمجوم الجدید",
    branchMobile: ""
  },
  {
    city: "الحمدانیة",
    branch: "بحي الحمدانیة الشارع العام یحتاج تحدیث الموقع",
    year: "",
    month: "",
    lat: "21.534833",
    lng: "39.213222",
    branchNumber: "230201LS",
    detailedAddress: "الحمدانیة - 230201LS بحي الحمدانیة الشارع العام یحتاج تحدیث الموقع",
    branchMobile: ""
  }
];
function Maps() {
  const [location, setLocation] = useState(center);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [cities, setCities] = useState([]);
  const [branches, setBranches] = useState([]);


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

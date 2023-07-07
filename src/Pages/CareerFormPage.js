import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../scss/careeers-page.scss";
import Select from "react-select";

import Banner from "../components/Banner";
import { useState } from "react";
const CareerFormPage = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <div className="nav" style={{ background: "white" }}>
        <Navigation nav={[]} />
      </div>
      <section id="careers-page">
        <div className="container">
          <div className="heading">
            <ul>
              <li>
                الرئيسية <span></span>
              </li>
              <li>
                <a href="#">التوظيف</a>
              </li>
            </ul>
            <h1>انضم الينا</h1>
          </div>
          <div className="content">
            <div className="form-1">
              <div className="form-heading">
                <h1>المعلومات الشخصية</h1>
              </div>

              <div className="input-boxes">
                <div className="input-box">
                  <label htmlFor="">الهاتف</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="">الاسم</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="">الجنسية</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />{" "}
                </div>
                <div className="input-box">
                  <label htmlFor="">البريد الإلكتروني</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="">منطقة العمل</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="">قسم</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />
                </div>
                <div className="input-box">
                  <label htmlFor=""> الحالة الاجتماعية</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-1">
              <div className="form-heading">
                <h1>معلومات التعليم </h1>
              </div>
              <div className="input-boxes">
                <div className="input-box">
                  <label htmlFor=""> المدينة</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />
                </div>
                <div className="input-box">
                  <label htmlFor=""> المستوى التعليمي</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />
                </div>
                <div className="input-box">
                  <label htmlFor=""> سنة التخرج</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />{" "}
                </div>
              </div>
            </div>
            <div className="form-1">
              <div className="form-heading">
                <h1>تحميل المستندات</h1>
              </div>
              <div className="input-boxes">
                <div className="input-box">
                  <label htmlFor=""> المدينة</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />{" "}
                </div>
                <div className="input-box">
                  <label htmlFor=""> المستوى التعليمي</label>
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />
                </div>
              </div>

              <div className="check-btn">
                <div className="check">
                  أؤكد أن المعلومات التي تم إدخالها أعلاه صحيحة
                  <input type="checkbox" name="" id="" />
                </div>
                <div className="btn">
                  <button>إرسال</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CareerFormPage;

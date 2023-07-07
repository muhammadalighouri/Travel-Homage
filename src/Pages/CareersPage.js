import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../scss/careeers-page.scss";
import { Input, Select } from "@material-ui/core";
const CareersPage = () => {
  return (
    <>
      <Navigation nav={[]} />
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
                  <input type="text" />
                </div>
                <div className="input-box">
                  <label htmlFor="">الاسم</label>
                  <input type="text" />
                </div>
                <div className="input-box">
                  <label htmlFor="">الجنسية</label>
                  <input type="text" />
                </div>
                <div className="input-box">
                  <label htmlFor="">البريد الإلكتروني</label>
                  <input type="text" />
                </div>
                <div className="input-box">
                  <label htmlFor="">منطقة العمل</label>
                  <input type="text" />
                </div>
                <div className="input-box">
                  <label htmlFor="">قسم</label>
                  <input type="text" />
                </div>
                <div className="input-box">
                  <label htmlFor=""> الحالة الاجتماعية</label>
                  <input type="text" />
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
                  <input type="text" />
                </div>
                <div className="input-box">
                  <label htmlFor=""> المستوى التعليمي</label>
                  <input type="text" />
                </div>
                <div className="input-box">
                  <label htmlFor=""> سنة التخرج</label>
                  <input type="text" />
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
                  <input type="text" />
                </div>
                <div className="input-box">
                  <label htmlFor=""> المستوى التعليمي</label>
                  <input type="text" />
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

export default CareersPage;

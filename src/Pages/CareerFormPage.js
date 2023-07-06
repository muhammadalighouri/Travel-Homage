import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../scss/careers-form.scss";
import { Input, Select } from "@material-ui/core";
import Banner from "../components/Banner";
import first from "../assests/Photo car.png";

const CareerFormPage = () => {
  return (
    <>

<Navigation nav={[]} />
  
      <section id="career-form-page">
           <div className="container">
          <div className="heading">
            <h1>وظائف يلو</h1>
          </div>
          <div className="content">
            {[1, 2, 3, 4].map((e) => {
              return (
                <>
                  <div className="grid-box">
                    <div className="first">
                      <div className="first-heading">
                        <span>تم نشره في مارس 23, 2023</span>
                        <p>(تم التحديث قبل واحد عام مضت)</p>
                      </div>
                      <a href="#" className="btn">
                        قدِّم الآن
                      </a>
                    </div>
                    <div className="second">
                      <div class="second-heading-1">
                        | السعودية | &nbsp;&nbsp; | &nbsp;&nbsp; رقم الوظيفة :
                        <b class="black">Customer Care Agent</b>
                      </div>
                      <p>
                        مسؤول رعاية عملاء
                        <a href="#" target="blank_">
                          ...اقرأ المزيد
                        </a>
                      </p>
                      <div className="second-heading-2">
                      الشواغر : <b>3</b> &nbsp; &nbsp; | &nbsp; &nbsp;التاريخ
                      النهائي للتقديم : <b>31/12/2153</b>
                    </div>
                    </div>
                   
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerFormPage;

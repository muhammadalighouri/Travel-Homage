import React from "react";
import "../scss/media-modal.scss";
import cross from "../assests/Fleet/Xmark.png";

const MediaModal = () => {
  return (
    <>
      <section id="media-modal">
        <div className="container">
          <div className="heading">
            <div className="cross">
              <img src={cross} alt="" />
            </div>
            <h1>أينما كانوا داخل وخارج</h1>
          </div>
          <section className="border-bottom mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg"
              className="img-fluid shadow-2-strong rounded-5 mb-4"
              alt=""
            />
            <div className="date-wrapper">
              <div className="date">02.07.2023</div>
            </div>
          </section>
          <div className="para">
            <p>
              ترافل لديها مجموعة متنوعة من المركبات حتى تتمكن من العثور على ما
              تبحث عنه سواء كانت سيارة بسقف أو سيارة رياضية أو سيارة واسعة.
              يمكنك اختيار ما يناسبك.
            </p>
            <p>
              كما يتمتع ترافل باختيار مواقع استراتيجية في العديد من مدن المملكة
              ، مما يجعل الأمر أسهل للعميل في التنقل والاستفادة من خدماتنا في أي
              مكان.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaModal;

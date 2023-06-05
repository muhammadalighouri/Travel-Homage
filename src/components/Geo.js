import React from 'react'
import "../scss/geo.scss"
import geoImg from "../assests/geo.png"
import icon from "../assests/head.png"
import Maps from './Maps'
const Geo = () => {
    return (
        <>
            <section id='geo'>
                <div className="inner">
                    <div className="container">
                        <div className="grid">
                            <div className="start">
                                <div className="img">
                                    <img src={geoImg} alt="" />
                                </div>

                                <p>
                                    لدينا خطة توسع شاملة للوصول إلى عملائنا أينما كانوا داخل وخارج المملكة العربية السعودية
                                </p>
                            </div>
                            <div className="end">
                                <div className="img">
                                    <img src={icon} alt="" />
                                </div>
                                <h2>فروعنا</h2>
                                <p>
                                    ترافل لديها مجموعة متنوعة من المركبات حتى تتمكن من العثور على ما تبحث عنه سواء كانت سيارة بسقف أو سيارة رياضية أو سيارة واسعة. يمكنك اختيار ما يناسبك.



                                </p>
                                <p>
                                    كما يتمتع ترافل باختيار مواقع استراتيجية في العديد من مدن المملكة ، مما يجعل الأمر أسهل للعميل في التنقل والاستفادة من خدماتنا في أي مكان.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Geo

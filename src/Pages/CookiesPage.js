import React from "react";
import "../scss/privacy-page.scss";
import Navigation from "../components/Navigation";
import first from "../assests/Photo car.png";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
const CookiesPage = () => {
  return (
    <>
      <Navigation nav={[]} />
      <Banner
        text={"سياسة ملفات تعريف الارتباط لحلول السفر لتأجير السيارات:"}
        img={first}
        p={true}
      />
      <section id="privacy">
        <div className="container">
          <div className="heading">
            <h1>Cookie Policy for Travel Car Rental Solutions:</h1>
            <p>
              At Travel Car Rental Solutions, we value the privacy of our users
              and utilize cookies and similar technologies to enhance your
              experience on our website and improve our services. Cookies are
              small files that are sent to your browser and stored on your
              mobile device, personal computer, or tablet when you visit our
              site.
            </p>
          </div>
          <div className="content">
            <div className="box">
              <h3>1. Cookie Consent:</h3>
              <p>
                By using our website and accepting the Cookie Policy, you
                consent to the use of cookies in accordance with this policy. If
                you do not agree to the use of cookies, please adjust your
                browser settings to reject cookies or refrain from using our
                website.
              </p>
            </div>

            <div className="box">
              <h3>2. Types of Cookies We Use:</h3>
              <p>
                Performance Cookies: These cookies help us improve the
                performance of the website and provide a better user experience,
                such as faster page loading and storing language preferences.
              </p>
              <p>
                Analytics Cookies: These cookies are used to collect information
                about how users interact with the website, such as the number of
                visits, viewed pages, and referral sources. We use this
                information to analyze and improve the performance of the
                website and our services.
              </p>
              <p>
                Functionality Cookies: These cookies are used to store user
                preferences and provide specific functionalities, such as
                remembering login details and storing information entered in
                order forms.
              </p>
            </div>
            <div className="box">
              <h3>3. Third-Party Cookies:</h3>
              <p>
                We may allow third parties, such as advertising partners, to
                place cookies on the user's device for targeted advertising and
                to enhance the advertising experience. Please note that we do
                not control the cookies placed by third parties and we are not
                responsible for their use.
              </p>
            </div>
            <div className="box">
              <h3>4. Managing Cookies:</h3>
              <p>
                Users can manage their cookie settings by changing their browser
                settings. The browser can be set to reject cookies or alert you
                when cookies are being sent. However, please note that rejecting
                cookies may impact your experience using the website, and some
                functionalities may not work properly.
              </p>
            </div>
            <div className="box">
              <h3>5. Changes to the Cookie Policy:</h3>
              <p>
                Travel Car Rental Solutions reserves the right to modify this
                Cookie Policy at any time. Users will be notified of any changes
                through clear notices published on our website or via direct
                communication.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CookiesPage;

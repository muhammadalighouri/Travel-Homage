import React from "react";
import "../scss/privacy-page.scss";
import Navigation from "../components/Navigation";
import first from "../assests/Photo car.png";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
const TermsPage = () => {
  return (
    <>
      <Navigation nav={[]} />
      <Banner text={"شروط استخدام الويب:"} img={first} p={true} />
      <section id="privacy">
        <div className="container">
          <div className="heading">
            <h1> Terms of Web Use:</h1>
          </div>
          <div className="content">
            <div className="box">
              <h3>1. Personal Use:</h3>
              <p>
                The application is intended for personal use only, and users
                must not use it for any commercial or illegal purposes.
              </p>
              <p>
                Copying or distributing the content available in the application
                without explicit permission from the app owner is prohibited.
              </p>
            </div>
            <div className="box">
              <h3>Collection, Processing, and Disclosure of Information</h3>
            </div>

            <div className="box">
              <h3>2. Personal Account:</h3>
              <p>
                Users must provide accurate and complete information when
                creating a personal account.
              </p>
              <p>
                Users are responsible for the confidentiality of their account
                information and should not share it with others.
              </p>
              <p>
                Users should immediately notify the app owner in case of
                suspected unauthorized use of their account.
              </p>
            </div>
            <div className="box">
              <h3>3. Content:</h3>
              <p>
                Publishing or distributing any unlawful, defamatory, inciting,
                abusive, racist, infringing, or harmful content is prohibited.
              </p>
              <p>
                Users should use the application responsibly and avoid causing
                any harm to the application or other users.
              </p>
            </div>
            <div className="box">
              <h3>4. Privacy and Data Protection:</h3>
              <p>
                The app owner reserves the right to use and process the personal
                information provided by users in accordance with the Privacy
                Policy.
              </p>
              <p>
                Security measures are implemented to protect personal data;
                however, data security cannot be guaranteed 100%, and users are
                advised to cooperate in protecting their personal information.
              </p>
            </div>
            <div className="box">
              <h3>5. Intellectual Property Rights:</h3>
              <p>
                All intellectual property rights related to the application and
                the content available within it belong to the app owner or
                licensed third parties.
              </p>
              <p>
                The use of any content from the application without obtaining
                explicit permission from the relevant rights holders is
                prohibited.
              </p>
            </div>
            <div className="box">
              <h3>6. Changes and Modifications:</h3>
              <p>
                The app owner reserves the right to change or modify the terms
                and conditions of use at any time without prior notice.
              </p>
              <p>
                Users are advised to regularly review the terms and conditions
                to stay updated on any updates or modifications.
              </p>
            </div>
            <div className="box">
              <h3>7. Termination of Use:</h3>
              <p>
                The app owner reserves the right to terminate a user's use of
                the application at any time and without prior notice in case of
                violation of any of the mentioned terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsPage;

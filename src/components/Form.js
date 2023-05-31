
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../scss/form.scss";
import Navigation from "./Navigation";
import LoadingAnimation from "./LoadingAnimation";
const Form = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_bi0twsh",
        "template_70lwzyt",
        form.current,
        "9Pkw4rOqj4QdNqhxr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Email sent successfully!");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setStatus("Failed to send email. Please try again later.");
        }
      );
  };
  window.scroll(0, 0)
  return (
    <>
      <Navigation />
      <section id="form">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h1>VOS INFOMATIONS</h1>
          </div>

          <form ref={form} onSubmit={sendEmail}>

            <div className="inputs-field">
              <div className="input" data-aos="fade-up">
                <span>Prénom</span>
                <input type="text" className="input" name="first_name" required id="" />
              </div>
              <div className="input" required data-aos="fade-up">
                <span>
                  Nom de famille</span>
                <input type="text" className="input" name="last_name" id="" />
              </div>
              <div className="input" data-aos="fade-up">
                <span>Mail</span>
                <input type="text" name="user_mail" className="input" id="" />
              </div>
              <div className="input" data-aos="fade-up">
                <span>Téléphone</span>
                <input type="text" name="user_telephone" className="input" id="" />
              </div>
              <div className="input" data-aos="fade-up">
                <span>Message</span>
                <textarea name="message" required />

              </div>
              <div className="text" data-aos="fade-up" >
                <p >
                  Les données personnelles recueillies sur ce formulaire sont
                  utilisées sous la responsabilité de MK GREEN ENERGY afin de vous
                  recontacter a votre demande et finaliser votre commande. Elles
                  seront ensuite utilisées, si votre commande est finalisée, pour
                  gérer notre relation commerciale avec MK GREEN ENERGY et ses
                  partenaires. Tous les champs sont obligatoires.
                </p>
                <p >
                  Pour plus dinformations sur vos droits sur vos données et sur les
                  traitements de données personnelles, veuillez consulter le site
                  suivant : https://www.cnil fr.
                </p>
              </div>
              <div className="check" data-aos="fade-up">
                <input type="checkbox" name="" id="" />
                J'accepte les conditions
              </div>

              <div className="btn">
                <button style={{
                  background: "rgb(0, 77, 142)",
                  color: "#fff",
                  cursor: "pointer",
                }} type="submit">     {loading ? <LoadingAnimation /> : 'ENVOYé'}</button>
              </div>
            </div>
          </form>

        </div>
      </section>
    </>
  );
};

export default Form;

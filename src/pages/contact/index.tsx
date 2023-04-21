import { FC } from "react";
import "./index.css";

interface contactProps {}

const Contact: FC<contactProps> = ({}) => {
  return (
    <div className="container-component">
      <section>
        <h1 className="title">Nous contacter</h1>
        <form
          target="_blank"
          action="https://formsubmit.co/matthieutricoire@gmail.com"
          method="POST"
          className="form-wrapper"
        >
          <div className="input-grid">
            {/* remove the captach */}
            <input type="hidden" name="_captcha" value="true" />
            {/* honey pot */}
            <input type="text" name="_honey" className="not-displayed" />
            <label htmlFor="firstname">Prénom</label>
            <input type="text" id="firstname" name="firstname" placeholder="" />
          </div>
          <div className="input-grid">
            <label htmlFor="lastname">Nom</label>
            <input type="text" id="lastname" name="lastname" placeholder="" />
          </div>
          <div className="input-grid">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="" placeholder="" />
          </div>
          <div className="input-grid">
            <label htmlFor="phone">Télephone</label>
            <input type="text" id="phone" name="phone" placeholder="" />
          </div>
          <textarea className="span-2" name="message" />
          <button className="button span-2" type="submit">
            Envoyer
          </button>
        </form>
      </section>
      <section className="">
        <h1 className="title">Où nous trouver ?</h1>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8520910962698!2d-0.37391872235121937!3d43.296419075431004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd564950df3d2313%3A0x739e1cb2131fc84!2sCLDesign!5e0!3m2!1sfr!2sfr!4v1681744825783!5m2!1sfr!2sfr"
            width="70%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;

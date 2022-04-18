import { personalInfo } from "../helper/data.js";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "@formspree/react";
import Modal from "../Components/modal";
import React, { useState, useEffect } from "react";

const ContactSingle = () => {
  const [state, handleSubmit] = useForm("xdobarle");
  const [modal, setModal] = useState(false);

  // useEffect(() => {
  //   document.title = "Chirag || Contact";
  // }, []);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <section className="single-section contact-single-section">
      <h1 className="title single-title">contact</h1>
      <div className="underline single-underline"></div>
      {modal && <Modal closeModal={closeModal} />}
      <section className="section-center contact-single">
        <article className="personal-info">
          {personalInfo.map((info) => {
            const { id, title, text, icon, redirect } = info;
            return (
              <div key={id} className="info">
                <span className="info-icons">
                  {icon}
                  <h3 className="info-title">{title}</h3>
                </span>
                {text.map((textInfo) => {
                  return (
                    <a key={uuidv4()} href={redirect} className="info-link">
                      {textInfo}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </article>
        <article className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" required />
            <input type="email" name="email" placeholder="email" required />
            <textarea
              id="message"
              name="message"
              required
              placeholder="message"
              rows={5}
            />
            <button
              className=" btn contact-btn"
              type="submit"
              disabled={state.submitting}
              to={"/thankyou"}
              onClick={openModal}
            >
              Submit
            </button>
          </form>
        </article>
      </section>
    </section>
  );
};

export default ContactSingle;

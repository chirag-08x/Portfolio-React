import { FaTimes } from "react-icons/fa";
import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <section className="modal">
      <section className="section-center modal-center">
        <button className="close-btn modal-close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
        <h5>Thanks for filling out the form.</h5>
      </section>
    </section>
  );
};

export default Modal;

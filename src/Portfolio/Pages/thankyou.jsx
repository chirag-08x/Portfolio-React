import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <section className="thankyou">
      <section className="section-center thank-center">
        <article className="thankyou-info">
          <h2>Thank you for filling out the form</h2>
          <Link className="thankyou-redirect" to={"/contact"}>
            Go Back to Contact Page
          </Link>
        </article>
      </section>
    </section>
  );
};

export default ThankYou;

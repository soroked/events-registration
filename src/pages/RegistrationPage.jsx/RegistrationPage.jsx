import { Link } from "react-router-dom";
import Form from "../../../components/Form/Form";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <section className={css.registrationContainer}>
      <div className={css.backContainer}>
        <Link to="/" className={css.backBtn}>
          🔙
        </Link>
        <h2 className={css.title}>Event Registration</h2>
      </div>

      <Form />
    </section>
  );
};

export default RegistrationPage;

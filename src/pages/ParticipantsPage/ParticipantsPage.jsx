import { Link } from "react-router-dom";
import css from "./ParticipantsPage.module.css";
import ParticipantsList from "../../../components/Participants/ParticipantsList";

const ParticipantsPage = () => {
  return (
    <section className={css.participantsContainer}>
      <div className={css.backContainer}>
        <Link to="/" className={css.backBtn}>
          🔙
        </Link>
        <h2 className={css.title}>Participants</h2>
      </div>
      <ParticipantsList />
    </section>
  );
};

export default ParticipantsPage;

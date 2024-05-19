import EventsList from "../../components/Events/EventsList";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <section className={css.homeContainer}>
        <h2 className={css.title}>Events</h2>
        <EventsList />
      </section>
    </div>
  );
};

export default HomePage;

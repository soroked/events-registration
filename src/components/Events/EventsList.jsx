import { useEffect, useState } from "react";
import css from "./EventsList.module.css";
import { Link } from "react-router-dom";

const EventsList = () => {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://backend-events-registration.onrender.com/api/events"
      );
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul className={css.eventsList}>
      {Array.isArray(events) ? (
        events.map(({ _id, title, description }) => (
          <li key={_id} className={css.eventCard}>
            <div>
              <p className={css.title}>{title}</p>
              <p className={css.description}>{description}</p>
            </div>
            <div className={css.buttons}>
              <Link to={`/registration/${_id}`} className={css.regButton}>
                Register
              </Link>
              <Link to={`/participants/${_id}`} className={css.viewButton}>
                View
              </Link>
            </div>
          </li>
        ))
      ) : (
        <li key={events._id}>
          <p>{events.title}</p>
          <p>{events.description}</p>
        </li>
      )}
    </ul>
  );
};

export default EventsList;

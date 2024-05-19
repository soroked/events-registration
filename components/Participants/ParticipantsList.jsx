import { useEffect, useState } from "react";
import css from "./ParticipantsList.module.css";
import { useParams } from "react-router-dom";

const ParticipantsList = () => {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://backend-events-registration.onrender.com/api/events/participants/${id}`
      );
      const data = await response.json();
      console.log(id);
      console.log("data: ", data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul className={css.usersList}>
      {users.length !== 0 ? (
        users.map(({ _id, name, email }) => (
          <li key={_id} className={css.userCard}>
            <p className={css.title}>{name}</p>
            <p className={css.description}>{email}</p>
          </li>
        ))
      ) : (
        <p>Currently there are no participants on this event</p>
      )}
    </ul>
  );
};

export default ParticipantsList;

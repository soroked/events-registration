import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ParticipantsPage from "./pages/ParticipantsPage/ParticipantsPage";
import RegistrationPage from "./pages/RegistrationPage.jsx/RegistrationPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/registration/:id" element={<RegistrationPage />} />
        <Route path="/participants/:id" element={<ParticipantsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;

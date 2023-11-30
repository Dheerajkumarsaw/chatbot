import React from "react";
import { useSelector } from "react-redux";
import EnrollmentThankYou from "../FareWellMessage/FareWell";
import { useNavigate } from "react-router-dom";
import "./Student.css";

const StudentInfo = () => {
  const info = useSelector((state) => state.content);
  const navigate = useNavigate();
  console.log(info);

  return (
    <div>
      <EnrollmentThankYou />
      {info.name !== "" && info.age !== 0 && (
        <p style={{ marginLeft: "28vw", width: "700px", fontSize: "x-large" }}>
          Your name {info.name} aged {info.age} has been added to student
          system. You may now exit.
        </p>
      )}
      <button onClick={() => navigate("/")} className="exit_button">
        Exit
      </button>
    </div>
  );
};
export default StudentInfo;

import "./EnrollNow.css";
import { useNavigate } from "react-router-dom";
function EnrollmentForm({ toggle }) {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center">
      <form className="container mt-10 rounded-lg border p-10">
        <div className="mb-5 text-center">
          <h1 className="text-xl font-light">
            Enroll into Student Info System
          </h1>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            onClick={() => {
              navigate("/chatbot");
            }}
            className="enroll-button"
          >
            Enroll Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default EnrollmentForm;

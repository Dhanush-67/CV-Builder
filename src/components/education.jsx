import { useState } from "react";

export function Education() {
  const [showModal, setShowModal] = useState([]);
  function addEducationModal() {
    const newEducation = { id: crypto.randomUUID() };
    setShowModal([...showModal, newEducation]);
  }

  return (
    <div className="education">
      <h1 style={{ textDecoration: "underline" }}>Education</h1>
      <button className="education-button" onClick={addEducationModal}>
        Add Education
      </button>

      {showModal.map((education) => {
        return <EducationModal key={education.id} />;
      })}
    </div>
  );
}

function EducationModal() {
  return (
    <div>
      <h2>Fuck you</h2>
    </div>
  );
}

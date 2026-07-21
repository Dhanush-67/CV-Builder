import { useState } from "react";

export function Experience({
  addExperience,
  deleteExperience,
  updateExperience,
  experiences,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function saveExperience(experience) {
    addExperience(
      experience.company,
      experience.position,
      experience.startDate,
      experience.endDate,
      experience.responsibilities,
    );
    setIsOpen(false);
  }

  return (
    <div className="experience">
      <h1 style={{ textDecoration: "underline" }}>Experience</h1>
      {!isOpen && (
        <>
          {/* {experiences.map((experience) => (
            <div key={experience.id}>
              <div className="experience-info">
                <h2 className="experience-company">{experience.company}</h2>

                <p className="experience-dates">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <p className="experience-position">{experience.position}</p>
              <p className="experience-responsibilities">
                {experience.responsibilities}
              </p>
            </div>
          ))} */}
          <button className="experience-button" onClick={() => setIsOpen(true)}>
            Add Experience
          </button>
        </>
      )}

      {isOpen && (
        <ExperienceModal
          onSave={saveExperience}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

function ExperienceModal({ onSave, onClose }) {
  const [form, setForm] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const experience = {
      company: form.company.trim(),
      position: form.position.trim(),
      startDate: form.startDate.trim(),
      endDate: form.endDate.trim(),
      responsibilities: form.responsibilities.trim(),
    };

    if (Object.values(experience).some((value) => value === "")) {
      return;
    }

    onSave(experience);
  }

  return (
    <form className="experience-modal" onSubmit={handleSubmit}>
      <p>Company:</p>
      <input
        name="company"
        type="text"
        value={form.company}
        onChange={handleChange}
        required
      />

      <p>Position:</p>
      <input
        name="position"
        type="text"
        value={form.position}
        onChange={handleChange}
        required
      />

      <p>Start Date:</p>
      <input
        name="startDate"
        type="text"
        value={form.startDate}
        onChange={handleChange}
        required
      />

      <p>End Date:</p>
      <input
        name="endDate"
        type="text"
        value={form.endDate}
        onChange={handleChange}
        required
      />

      <p>Responsibilities:</p>
      <textarea
        name="responsibilities"
        value={form.responsibilities}
        onChange={handleChange}
        required
      />
      <button
        type="button"
        className="experience-save-button"
        onClick={onClose}
      >
        Cancel
      </button>
      <button type="submit" className="experience-save-button">
        Save
      </button>
    </form>
  );
}

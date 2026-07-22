import { useState } from "react";

export function Experience({
  addExperience,
  deleteExperience,
  updateExperience,
  experiences,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(null);

  const selectedExperience = experiences.find(
    (experience) => experience.id === isEdit,
  );

  function saveExperience(experience) {
    addExperience(
      experience.company,
      experience.position,
      experience.startDate,
      experience.endDate,
      experience.responsibilities,
    );
    setIsOpen(false);
    setIsEdit(null);
  }

  return (
    <div className="experience">
      <h1 style={{ textDecoration: "underline" }}>Experience</h1>
      {!isOpen && (
        <>
          <ExperienceList
            experiences={experiences}
            deleteExperience={deleteExperience}
            updateExperience={updateExperience}
            onEdit={setIsEdit}
          />
          <button className="experience-button" onClick={() => setIsOpen(true)}>
            Add Experience
          </button>
        </>
      )}

      {isOpen && (
        <ExperienceModal
          key="add-experience"
          onSave={saveExperience}
          onClose={() => setIsOpen(false)}
        />
      )}
      {isEdit && (
        <ExperienceModal
          key={isEdit}
          initialExperience={selectedExperience}
          onSave={saveExperience}
          onClose={() => setIsEdit(null)}
          id={isEdit}
          updateExperience={updateExperience}
        />
      )}
    </div>
  );
}

function ExperienceModal({
  initialExperience,
  onSave,
  onClose,
  id,
  updateExperience,
}) {
  const [form, setForm] = useState(() => ({
    company: initialExperience?.company ?? "",
    position: initialExperience?.position ?? "",
    startDate: initialExperience?.startDate ?? "",
    endDate: initialExperience?.endDate ?? "",
    responsibilities: initialExperience?.responsibilities ?? "",
  }));

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

    if (id) {
      updateExperience(id, experience);
      onClose();
    } else {
      onSave(experience);
    }
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

function ExperienceList({ experiences, deleteExperience, onEdit }) {
  return (
    <div className="experience-list">
      {experiences.map((experience) => (
        <div key={experience.id} className="experience-item">
          <h2>{experience.company}</h2>
          <div className="experience-item-buttons">
            <button onClick={() => deleteExperience(experience.id)}>
              Delete
            </button>
            <button onClick={() => onEdit(experience.id)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}

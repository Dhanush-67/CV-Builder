import { Display } from "./display";
import { Editor } from "./editor";
import { useState } from "react";

export function Body() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [experiences, setExperiences] = useState([]);

  function addExperience(
    company,
    position,
    startDate,
    endDate,
    responsibilities,
  ) {
    const newExperience = {
      id: crypto.randomUUID(),
      company,
      position,
      startDate,
      endDate,
      responsibilities,
    };
    setExperiences((experiences) => [...experiences, newExperience]);
  }

  function deleteExperience(id) {
    setExperiences((experiences) =>
      experiences.filter((experience) => experience.id !== id),
    );
  }

  function updateExperience(argid, updates) {
    const { id, ...safeUpdates } = updates;
    setExperiences((experiences) =>
      experiences.map((experience) => {
        if (experience.id !== argid) return experience;
        return { ...experience, ...safeUpdates };
      }),
    );
  }

  return (
    <div className="body">
      <Editor
        name={name}
        email={email}
        number={number}
        setName={setName}
        setEmail={setEmail}
        setNumber={setNumber}
        experiences={experiences}
        addExperience={addExperience}
        deleteExperience={deleteExperience}
        updateExperience={updateExperience}
      />
      <Display
        name={name}
        email={email}
        number={number}
        experiences={experiences}
      />
    </div>
  );
}

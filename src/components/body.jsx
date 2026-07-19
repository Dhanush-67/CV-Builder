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
    setExperiences([...experiences, newExperience]);
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

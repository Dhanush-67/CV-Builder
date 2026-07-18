import { Display } from "./display";
import { Editor } from "./editor";
import { useState } from "react";

export function Body() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [experiences, setExperiences] = useState([]);

  return (
    <div className="body">
      <Editor
        name={name}
        email={email}
        number={number}
        setName={setName}
        setEmail={setEmail}
        setNumber={setNumber}
      />
      <Display name={name} email={email} number={number} />
    </div>
  );
}

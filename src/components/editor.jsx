import { General } from "./general.jsx";
import { Experience } from "./experience.jsx";
import { Education } from "./education.jsx";

export function Editor({ name, email, number, setName, setEmail, setNumber }) {
  return (
    <div className="editor">
      <General
        name={name}
        email={email}
        number={number}
        setName={setName}
        setEmail={setEmail}
        setNumber={setNumber}
      />
      <Experience />
      <Education />
    </div>
  );
}

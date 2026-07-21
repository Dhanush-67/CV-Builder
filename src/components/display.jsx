import { ExperienceDisplay } from "./experienceDisplay";

export function Display({ name, email, number, experiences }) {
  return (
    <div className="display-general">
      <h1 style={{ textDecoration: "underline", fontWeight: "bold" }}>
        {name}{" "}
      </h1>
      <div className="sub-header">
        <p>{email}</p>
        {email && <p>{"|"}</p>}
        <p>{number}</p>
      </div>
      <ExperienceDisplay experiences={experiences} />
    </div>
  );
}

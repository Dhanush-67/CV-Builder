export function Display({ name, email, number, experiences }) {
  return (
    <div className="display-general">
      <h1 style={{ textDecoration: "underline" }}>{name} </h1>
      <div className="sub-header">
        <p>{email}</p>
        {email && <p>{"|"}</p>}
        <p>{number}</p>
      </div>
    </div>
  );
}

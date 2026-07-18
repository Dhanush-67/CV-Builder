export function Display({ name, email, number }) {
  return (
    <div className="display">
      <h1 style={{ textDecoration: "underline" }}>{name} </h1>
      <div className="sub-header">
        <p>{email}</p>
        {email && <p>{"|"}</p>}
        <p>{number}</p>
      </div>
    </div>
  );
}

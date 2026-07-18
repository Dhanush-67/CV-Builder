export function General({ name, email, number, setName, setEmail, setNumber }) {
  return (
    <div className="general">
      <h1 style={{ textDecoration: "underline" }}>General Information</h1>
      <div className="general-info">
        <p> Name: </p>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <p> Email: </p>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p> Number: </p>
        <input
          type="text"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </div>
    </div>
  );
}

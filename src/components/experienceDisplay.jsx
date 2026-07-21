export function ExperienceDisplay({ experiences }) {
  return (
    <div>
      {experiences.length > 0 && (
        <h1
          style={{
            textAlign: "left",
            fontSize: "25px",
            fontWeight: "bold",
            marginBottom: "10px",
            borderBottom: "2px solid black",
          }}
        >
          Experience
        </h1>
      )}
      {experiences.map((experience) => (
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
      ))}
    </div>
  );
}

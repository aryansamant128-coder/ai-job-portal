export default function SkillMatch({
  matchingSkills = [],
  missingSkills = [],
}) {
  return (
    <div className="row mb-4">
      <div className="col-md-6">
        <div className="card shadow h-100">
          <div className="card-body">
            <h4 className="text-success">✅ Matching Skills</h4>

            {matchingSkills.length > 0 ? (
              <ul className="list-group mt-3">
                {matchingSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-success"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted mt-3">
                No matching skills found.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card shadow h-100">
          <div className="card-body">
            <h4 className="text-danger">❌ Missing Skills</h4>

            {missingSkills.length > 0 ? (
              <ul className="list-group mt-3">
                {missingSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="list-group-item list-group-item-danger"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-success mt-3">
                Great! No missing skills.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
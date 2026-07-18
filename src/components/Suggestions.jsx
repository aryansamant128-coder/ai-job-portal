export default function Suggestions({ suggestions = [] }) {
  return (
    <div className="card shadow p-3 mt-4">
      <h4 className="mb-3">💡 Suggestions</h4>

      {suggestions.length > 0 ? (
        <ul className="list-group">
          {suggestions.map((item, index) => (
            <li
              key={index}
              className="list-group-item"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert alert-success mb-0">
          🎉 Great! Your resume looks good. No suggestions available.
        </div>
      )}
    </div>
  );
}
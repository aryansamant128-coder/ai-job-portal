import { useState } from "react";

export default function ResumeUpload({ onFileSelect }) {
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div className="card p-3 mb-3">
      <h4>Upload Resume</h4>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        className="form-control"
      />

      {fileName && (
        <p className="mt-2">
          Selected File: <strong>{fileName}</strong>
        </p>
      )}
    </div>
  );
}
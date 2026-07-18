import { useState, useEffect } from "react";

import { supabase } from "../../services/supabase";

import ResumeUpload from "../ResumeUpload";
import ATSScore from "../ATSScore";
import SkillMatch from "../SkillMatch";
import Suggestions from "../Suggestions";

import { extractPDFText } from "../../services/user/pdfService";
import { extractDOCXText } from "../../services/user/docxService";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);

  const [resumeText, setResumeText] = useState("");

  const [result, setResult] = useState(null);

  const [jobs, setJobs] = useState([]);

  const [selectedJob, setSelectedJob] = useState("");
    useEffect(() => {
    fetchJobs();
  }, []);
return (
  <div className="container mt-4">

    <h2 className="mb-4">
      AI Resume Analyzer
    </h2>

    <ResumeUpload onFileSelect={setFile} />

    <div className="mb-3">
      <label className="form-label">
        Select Job
      </label>

      <select
        className="form-select"
        value={selectedJob}
        onChange={(e) =>
          setSelectedJob(e.target.value)
        }
      >
        <option value="">
          Choose Job
        </option>

        {jobs.map((job) => (
          <option
            key={job.id}
            value={job.id}
          >
            {job.title} - {job.company}
          </option>
        ))}
      </select>
    </div>

    <button
      className="btn btn-primary mb-4"
      onClick={analyzeResume}
    >
      Analyze Resume
    </button>

    {resumeText && (
      <div className="card p-3 mb-4">
        <h4>Extracted Resume</h4>

        <pre
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {resumeText}
        </pre>
      </div>
    )}

    {result && (
      <>
        <ATSScore
          score={result.score}
        />

        <SkillMatch
          matchingSkills={
            result.matchingSkills
          }
          missingSkills={
            result.missingSkills
          }
        />

        <Suggestions
          suggestions={
            result.suggestions
          }
        />
      </>
    )}

  </div>
);
}
  const fetchJobs = async () => {
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error);
    } else {
      setJobs(data);
    }
  };
    const analyzeResume = async () => {
    if (!file) {
      alert("Please upload a resume.");
      return;
    }

    if (!selectedJob) {
      alert("Please select a job.");
      return;
    }

    let text = "";

    if (file.type === "application/pdf") {
      text = await extractPDFText(file);
    } else {
      text = await extractDOCXText(file);
    }

    setResumeText(text);
        const selectedJobData = jobs.find(
      (job) => job.id === Number(selectedJob)
    );

    if (!selectedJobData) {
      alert("Job not found.");
      return;
    }

    const requiredSkills =
      (selectedJobData.requirements || "")
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean);
            const matchingSkills = [];

    const missingSkills = [];

    requiredSkills.forEach((skill) => {
      if (
        text
          .toLowerCase()
          .includes(skill.toLowerCase())
      ) {
        matchingSkills.push(skill);
      } else {
        missingSkills.push(skill);
      }
    });

    const score =
      requiredSkills.length > 0
        ? Math.round(
            (matchingSkills.length /
              requiredSkills.length) *
              100
          )
        : 0;
            const suggestions = [];

    if (missingSkills.length > 0) {
      suggestions.push(
        `Add these skills: ${missingSkills.join(", ")}`
      );
    }

    if (score >= 80) {
      suggestions.push(
        "Excellent! Your resume is ATS friendly."
      );
    } else if (score >= 60) {
      suggestions.push(
        "Good resume, but adding more required skills will improve it."
      );
    } else {
      suggestions.push(
        "Your resume needs improvement. Add more relevant skills and projects."
      );
    }

    const analysis = {
      score,
      matchingSkills,
      missingSkills,
      suggestions,
    };

    setResult(analysis);
        const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first.");
      return;
    }

    const { error } = await supabase
      .from("resume_analysis")
      .insert({
        user_id: user.id,
        job_id: Number(selectedJob),
        resume_name: file.name,
        ats_score: score,
        matching_skills: matchingSkills,
        missing_skills: missingSkills,
        suggestions: suggestions,
      });

    if (error) {
      console.log(error);
      alert(error.message);
    } else {
      alert("Resume analyzed successfully!");
    }
  };
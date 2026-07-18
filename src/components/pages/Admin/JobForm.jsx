import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createJob, updateJob } from "../../../services/admin/adminJobService";

const JobForm = ({ job = null }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    job_type: "",
    experience: "",
    description: "",
    requirements: "",
    logo: "",
  });

  useEffect(() => {
    if (job) {
      setFormData({
        title: job.title || "",
        company: job.company || "",
        location: job.location || "",
        salary: job.salary || "",
        job_type: job.job_type || "",
        experience: job.experience || "",
        description: job.description || "",
        requirements: job.requirements || "",
        logo: job.logo || "",
      });
    }
  }, [job]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (job) {
        await updateJob(job.id, formData);
        alert("Job Updated Successfully");
      } else {
        await createJob(formData);
        alert("Job Posted Successfully");
      }

      navigate("/admin/jobs");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
      <h2 className="text-3xl font-bold mb-6">
        {job ? "Edit Job" : "Post New Job"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <select
          name="job_type"
          value={formData.job_type}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        >
          <option value="">Select Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
        </select>

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          placeholder="Job Description"
          rows="5"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <textarea
          name="requirements"
          placeholder="Requirements"
          rows="5"
          value={formData.requirements}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="logo"
          placeholder="Company Logo URL"
          value={formData.logo}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
        >
          {job ? "Update Job" : "Post Job"}
        </button>

      </form>
    </div>
  );
};

export default JobForm;
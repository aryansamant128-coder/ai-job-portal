import { useEffect, useState } from "react";
<<<<<<< HEAD
import AdminLayout from "../../Admin/AdminLayout";
import JobTable from "../../Admin/JobTable";
import { getJobs } from "../../../services/admin/adminJobService";
import JobForm from "./JobForm";
=======
import AdminLayout from "../../components/admin/AdminLayout";
import JobTable from "../../components/admin/JobTable";
import JobForm from "../../components/admin/JobForm";
import { getJobs } from "../../services/admin/adminJobService";

>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const loadJobs = async () => {
    const data = await getJobs();
    setJobs(data);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <AdminLayout>
      <h1>Job Management</h1>

      <JobForm
        selectedJob={selectedJob}
        refreshJobs={loadJobs}
      />

      <JobTable
        jobs={jobs}
        refreshJobs={loadJobs}
        setSelectedJob={setSelectedJob}
      />
    </AdminLayout>
  );
};

export default Jobs;
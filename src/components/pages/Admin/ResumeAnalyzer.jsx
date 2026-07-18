import { useEffect, useState } from "react";
<<<<<<< HEAD
import AdminLayout from "../../Admin/AdminLayout";
import ResumeAnalysisTable from "../../Admin/ResumeAnalysisTable";
import { getResumeAnalysis } from "../../../services/admin/adminResumeService";
=======
import AdminLayout from "../../components/admin/AdminLayout";
import ResumeAnalysisTable from "../../components/admin/ResumeAnalysisTable";
import { getResumeAnalysis } from "../../services/admin/adminResumeService";
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

const ResumeAnalyzer = () => {

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadReports = async () => {
    try {
      const data = await getResumeAnalysis();
      setReports(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReports();
  }, []);

  return (
    <AdminLayout>

      <h1>Resume Analysis</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ResumeAnalysisTable
          reports={reports}
          refreshReports={loadReports}
        />
      )}

    </AdminLayout>
  );
};

export default ResumeAnalyzer;
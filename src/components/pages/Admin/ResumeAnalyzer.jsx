import { useEffect, useState } from "react";
import AdminLayout from "../../Admin/AdminLayout";
import ResumeAnalysisTable from "../../Admin/ResumeAnalysisTable";
import { getResumeAnalysis } from "../../../services/admin/adminResumeService";

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
      <h1 className="text-2xl font-bold mb-6">Resume Analysis</h1>

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

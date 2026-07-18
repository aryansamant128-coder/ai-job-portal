import { deleteResumeAnalysis } from "../../services/admin/adminResumeService";

const ResumeAnalysisTable = ({ reports, refreshReports }) => {

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this analysis report?"
    );

    if (!confirmDelete) return;

    try {
      await deleteResumeAnalysis(id);
      alert("Report deleted successfully.");
      refreshReports();
    } catch (error) {
      console.error(error);
      alert("Unable to delete report.");
    }
  };

  return (
    <table border="1" cellPadding="10" width="100%">

      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>ATS Score</th>
          <th>Matched Skills</th>
          <th>Missing Skills</th>
          <th>Suggestions</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        {reports.length === 0 ? (
          <tr>
            <td colSpan="7" align="center">
              No Resume Analysis Found
            </td>
          </tr>
        ) : (
          reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.user_id}</td>
              <td>{report.ats_score}</td>
              <td>{report.matched_skills}</td>
              <td>{report.missing_skills}</td>
              <td>{report.suggestions}</td>
              <td>
                <button onClick={() => handleDelete(report.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}

      </tbody>

    </table>
  );
};

export default ResumeAnalysisTable;
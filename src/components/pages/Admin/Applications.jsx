import { useEffect, useState } from "react";
import {
  getApplications,
  updateApplicationStatus,
  deleteApplication,
} from "../../../services/admin/adminApplicationService";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const data = await getApplications();
      setApplications(data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateApplicationStatus(id, status);

      setApplications((prev) =>
        prev.map((app) =>
          app.id === id ? { ...app, status } : app
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this application?"
    );

    if (!confirmDelete) return;

    try {
      await deleteApplication(id);

      setApplications((prev) =>
        prev.filter((app) => app.id !== id)
      );
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading Applications...
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Manage Applications
      </h1>

      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Applicant</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Job</th>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Applied On</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {applications.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="p-6 text-center text-gray-500"
                >
                  No Applications Found
                </td>
              </tr>
            ) : (
              applications.map((application) => (
                <tr
                  key={application.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    {application.full_name || "-"}
                  </td>

                  <td className="p-4">
                    {application.email || "-"}
                  </td>

                  <td className="p-4">
                    {application.title || "-"}
                  </td>

                  <td className="p-4">
                    {application.company || "-"}
                  </td>

                  <td className="p-4">
                    <select
                      value={application.status}
                      onChange={(e) =>
                        handleStatusChange(
                          application.id,
                          e.target.value
                        )
                      }
                      className="border rounded-md px-3 py-1"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Under Review">
                        Under Review
                      </option>
                      <option value="Interview">
                        Interview
                      </option>
                      <option value="Selected">
                        Selected
                      </option>
                      <option value="Rejected">
                        Rejected
                      </option>
                    </select>
                  </td>

                  <td className="p-4">
                    {new Date(
                      application.applied_at
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() =>
                        handleDelete(application.id)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
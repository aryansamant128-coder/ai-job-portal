import { Link } from "react-router-dom";

const AdminSidebar = () => {

  return (

    <div className="w-64 bg-slate-900 text-white min-h-screen">

      <h2 className="text-2xl font-bold p-5">
        HirePilot
      </h2>

      <nav className="flex flex-col gap-4 p-5">

        <Link to="/admin/dashboard">Dashboard</Link>

        <Link to="/admin/users">Users</Link>

        <Link to="/admin/jobs">Jobs</Link>

        <Link to="/admin/applications">Applications</Link>

        <Link to="/admin/resume-analyzer">
          Resume Analyzer
        </Link>

        <Link to="/admin/analytics">
          Analytics
        </Link>

        <Link to="/admin/settings">
          Settings
        </Link>

      </nav>

    </div>

  );

};

export default AdminSidebar;
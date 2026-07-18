import React from "react";

const UserTable = ({ users = [] }) => {

  return (
    <div className="table-container">

      <h2>Users Management</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>


        <tbody>

          {users.length > 0 ? (

            users.map((user)=>(
              <tr key={user.id}>

                <td>{user.id}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>
                  {user.role || "Candidate"}
                </td>

                <td>
                  <span className="status">
                    {user.status || "Active"}
                  </span>
                </td>

                <td>

                  <button className="view-btn">
                    View
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>

                </td>

              </tr>
            ))

          ) : (

            <tr>
              <td colSpan="6">
                No Users Found
              </td>
            </tr>

          )}

        </tbody>


      </table>

    </div>
  );
};


export default UserTable;
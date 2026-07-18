import React from "react";


const JobTable = ({jobs=[]}) => {


  return (

    <div className="table-container">


      <h2>
        Jobs Management
      </h2>


      <table>


        <thead>

          <tr>

            <th>ID</th>
            <th>Job Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Applicants</th>
            <th>Action</th>

          </tr>

        </thead>


        <tbody>


        {
          jobs.length > 0 ? (

            jobs.map((job)=>(

              <tr key={job.id}>

                <td>
                  {job.id}
                </td>


                <td>
                  {job.title}
                </td>


                <td>
                  {job.company}
                </td>


                <td>
                  {job.location}
                </td>


                <td>
                  {job.applicants || 0}
                </td>


                <td>

                  <button className="edit-btn">
                    Edit
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
                No Jobs Available
              </td>
            </tr>

          )
        }


        </tbody>


      </table>


    </div>

  );

};


export default JobTable;
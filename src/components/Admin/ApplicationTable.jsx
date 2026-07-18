import React from "react";


const ApplicationTable = ({applications=[]}) => {


return (

<div className="table-container">


<h2>
Applications
</h2>


<table>


<thead>

<tr>

<th>ID</th>
<th>Candidate</th>
<th>Job</th>
<th>Status</th>
<th>Date</th>
<th>Action</th>

</tr>

</thead>



<tbody>


{
applications.length > 0 ? (

applications.map((application)=>(

<tr key={application.id}>


<td>
{application.id}
</td>


<td>
{application.user}
</td>


<td>
{application.job}
</td>


<td>
<span>
{application.status || "Pending"}
</span>
</td>


<td>
{application.date}
</td>


<td>

<button className="view-btn">
View
</button>


<button className="approve-btn">
Approve
</button>


</td>


</tr>


))


):(


<tr>

<td colSpan="6">
No Applications Found
</td>

</tr>


)

}


</tbody>


</table>


</div>

);

};


export default ApplicationTable;
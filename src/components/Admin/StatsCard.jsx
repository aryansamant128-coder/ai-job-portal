import React from "react";


const StatsCard = ({
  title,
  value,
  icon
}) => {


  return (

    <div className="stats-card">

      <div className="stats-icon">
        {icon}
      </div>


      <div>

        <h3>
          {value}
        </h3>

        <p>
          {title}
        </p>

      </div>


    </div>

  );

};


export default StatsCard;
import { useEffect, useState } from "react";
<<<<<<< HEAD
import AdminLayout from "../../Admin/AdminLayout";
import AnalyticsChart from "../../Admin/AnalyticsChart";
  import { getAnalytics } from "../../../services/admin/adminAnalyticsService";  

=======
import AdminLayout from "../../components/admin/AdminLayout";
import AnalyticsChart from "../../components/admin/AnalyticsChart";
import { getAnalytics } from "../../services/admin/adminAnalyticsService";
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

const Analytics = () => {

  const [chartData, setChartData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadAnalytics();

  }, []);

  const loadAnalytics = async () => {

    try {

      const data = await getAnalytics();

      setChartData(data);

    } catch (error) {

      console.log(error);

    }

    setLoading(false);

  };

  return (

    <AdminLayout>

      <h1>Analytics Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <AnalyticsChart data={chartData} />
      )}

    </AdminLayout>

  );

};

export default Analytics;
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import {supabase} from "../services/supabase";
=======
import supabase from "../services/supabase";
>>>>>>> ec4c99f0041b580768c50f2f843e2572ccc10c79

const AdminRoute = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {

    checkAdmin();

  }, []);

  const checkAdmin = async () => {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    setIsAdmin(data?.role === "admin");

    setLoading(false);
  };

  if (loading) return <h2>Loading...</h2>;

  if (!isAdmin) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default AdminRoute;
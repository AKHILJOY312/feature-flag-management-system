import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import OrganizationForm from "../components/OrganizationForm";
import OrganizationList from "../components/OrganizationList";

export default function DashboardPage() {
  const [organizations, setOrganizations] = useState([]);

  const fetchOrganizations = async () => {
    try {
      const res = await api.get("/organizations");
      setOrganizations(res.data.data);
    } catch (error) {
      console.error("Failed to fetch organizations:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await api.get("/organizations");
        setOrganizations(res.data.data);
      } catch (error) {
        console.error("Failed to load organizations:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="app-shell">
      <Navbar />

      <div className="mb-8">
        <h2 className="page-title">Organizations</h2>
        <p className="page-subtitle">Create and manage tenant organizations.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[400px_minmax(0,1fr)]">
        <OrganizationForm onCreated={fetchOrganizations} />

        <div className="w-full overflow-x-auto">
          <OrganizationList organizations={organizations} />
        </div>
      </div>
    </div>
  );
}

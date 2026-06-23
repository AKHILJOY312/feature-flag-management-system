import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/ui/Navbar";
import FeatureFlagForm from "../components/FeatureFlagForm";
import FeatureFlagList from "../components/FeatureFlagList";

export default function DashboardPage() {
  const [flags, setFlags] = useState([]);

  // Keeps this available as a callback for children forms
  const fetchFlags = async () => {
    try {
      const response = await api.get("/flags");
      setFlags(response.data.data);
    } catch (error) {
      console.error("Error refreshing flags:", error);
    }
  };

  // FIX: Isolated fetching inside the effect to prevent cascading render warnings
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await api.get("/flags");
        setFlags(response.data.data);
      } catch (error) {
        console.error("Error loading initial flags:", error);
      }
    };

    loadData();
  }, []); // Empty array ensures it runs safely exactly once on mount

  const enabledCount = flags.filter((flag) => flag.enabled).length;

  return (
    <div className="app-shell">
      <Navbar />

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="card">
          <p className="stat-number">{flags.length}</p>
          <p className="stat-label">Total Flags</p>
        </div>

        <div className="card">
          <p className="stat-number">{enabledCount}</p>
          <p className="stat-label">Enabled</p>
        </div>

        <div className="card">
          <p className="stat-number">{flags.length - enabledCount}</p>
          <p className="stat-label">Disabled</p>
        </div>
      </div>

      <div className="mb-8">
        <FeatureFlagForm onCreated={fetchFlags} />
      </div>

      <FeatureFlagList flags={flags} refresh={fetchFlags} />
    </div>
  );
}

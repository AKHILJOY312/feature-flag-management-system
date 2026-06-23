import { useState } from "react";
import api from "../services/api";

export default function OrganizationForm({ onCreated }) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/organizations", {
        name,
      });

      setName("");

      onCreated();
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to create organization");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2 className="mb-5 text-xl font-bold">Create Organization</h2>

      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label className="label">Organization Name</label>

          <input
            type="text"
            className="input"
            placeholder="Netflix"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? "Creating..." : "Create Organization"}
        </button>
      </form>
    </div>
  );
}

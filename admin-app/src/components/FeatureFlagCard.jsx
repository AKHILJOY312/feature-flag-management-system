import api from "../services/api";
import toast from "react-hot-toast";

export default function FeatureFlagCard({ flag, refresh }) {
  const toggleFlag = async () => {
    try {
      await api.patch(`/flags/${flag._id}`, {
        enabled: !flag.enabled,
      });

      toast.success("Flag updated");

      refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Update failed");
    }
  };

  const deleteFlag = async () => {
    try {
      await api.delete(`/flags/${flag._id}`);

      toast.success("Flag deleted");

      refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div className="card">
      <h3 className="mb-4 text-lg font-semibold">{flag.featureKey}</h3>

      <div className="mb-5">
        {flag.enabled ? (
          <span className="badge badge-success">Enabled</span>
        ) : (
          <span className="badge badge-disabled">Disabled</span>
        )}
      </div>

      <div className="flex gap-2">
        <button onClick={toggleFlag} className="btn-primary flex-1">
          {flag.enabled ? "Disable" : "Enable"}
        </button>

        <button onClick={deleteFlag} className="btn-secondary">
          Delete
        </button>
      </div>
    </div>
  );
}

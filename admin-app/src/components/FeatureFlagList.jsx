import FeatureFlagCard from "./FeatureFlagCard";

export default function FeatureFlagList({ flags, refresh }) {
  if (!flags.length) {
    return <div className="card">No feature flags found.</div>;
  }

  return (
    <div className="feature-grid">
      {flags.map((flag) => (
        <FeatureFlagCard key={flag._id} flag={flag} refresh={refresh} />
      ))}
    </div>
  );
}

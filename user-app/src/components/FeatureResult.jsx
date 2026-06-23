export default function FeatureResult({ result }) {
  if (!result) return null;

  return (
    <div className="card mt-6 text-center">
      {result.enabled ? (
        <>
          <div className="mb-3 text-6xl">✅</div>

          <h2 className="mb-2 text-2xl font-bold text-accent">
            Feature Enabled
          </h2>

          <p className="text-muted">
            This feature is available for your organization.
          </p>
        </>
      ) : (
        <>
          <div className="mb-3 text-6xl">❌</div>

          <h2 className="mb-2 text-2xl font-bold text-brand">
            Feature Disabled
          </h2>

          <p className="text-muted">
            This feature is not available for your organization.
          </p>
        </>
      )}
    </div>
  );
}

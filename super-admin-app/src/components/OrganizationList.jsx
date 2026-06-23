import OrganizationCard from "./OrganizationCard";

export default function OrganizationList({ organizations }) {
  if (!organizations.length) {
    return (
      <div className="card">
        <p className="text-muted">No organizations found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {organizations.map((organization) => (
        <OrganizationCard key={organization._id} organization={organization} />
      ))}
    </div>
  );
}

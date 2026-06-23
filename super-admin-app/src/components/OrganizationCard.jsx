export default function OrganizationCard({ organization }) {
  return (
    <div className="card card-hover">
      <h3 className="text-lg font-semibold">{organization.name}</h3>

      <p className="mt-2 text-sm text-muted">ID: {organization._id}</p>
    </div>
  );
}

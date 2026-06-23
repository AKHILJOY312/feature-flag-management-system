export default function Input({ label, error, register, ...props }) {
  return (
    <div>
      <label className="label">{label}</label>

      <input {...register} {...props} className="input" />

      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}

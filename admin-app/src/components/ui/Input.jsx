import ErrorMessage from "./ErrorMessage";

export default function Input({ label, error, register, ...props }) {
  return (
    <div>
      <label className="label">{label}</label>

      <input
        {...register}
        {...props}
        className={`input ${error ? "border-red-500" : ""}`}
      />

      <ErrorMessage message={error?.message} />
    </div>
  );
}

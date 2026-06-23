import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="logo-text text-4xl text-brand">FlagFlow</h1>

        <p className="page-subtitle">Feature Flag Dashboard</p>
      </div>

      <button onClick={logoutHandler} className="btn-primary">
        Logout
      </button>
    </header>
  );
}

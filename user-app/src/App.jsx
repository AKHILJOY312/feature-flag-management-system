import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <HomePage />

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#fff",
            color: "#16610E",
            border: "1px solid #FED16A",
          },
        }}
      />
    </>
  );
}

export default App;

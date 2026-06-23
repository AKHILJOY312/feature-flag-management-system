import Header from "../components/Header";

import FeatureCheckForm from "../components/FeatureCheckForm";

export default function HomePage() {
  return (
    <main className="app-shell flex min-h-screen items-center justify-center">
      <div className="w-full max-w-2xl">
        <Header />

        <FeatureCheckForm />
      </div>
    </main>
  );
}

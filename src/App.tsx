import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen">
      {/* Decorative Background */}
      <Navbar />
      <main className="max-w-[1600px] mx-auto">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;

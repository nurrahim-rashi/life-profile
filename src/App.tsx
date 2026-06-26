import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import Backendless from "./lib/backendless";
console.log(Backendless);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-[1600px] mx-auto">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;

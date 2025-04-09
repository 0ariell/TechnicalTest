import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import MainContent from "./pages/MainContent";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <MainContent />
        </main>
      </div>
    </div>
  );
}

export default App;

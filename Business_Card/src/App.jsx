import BackBuisnessCard from "./components/BusinessCard/BackBuisnessCard";
import FrontBuisnessCard from "./components/BusinessCard/FrontBuisnessCard";

function App() {
  return (
    <div className="business-card">
      <FrontBuisnessCard />
      <BackBuisnessCard />
    </div>
  );
}

export default App;

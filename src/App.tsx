import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import SensorHomePage from "./pages/SensorHome.page.tsx";
import SensorDetailsPage from "./pages/SensorDetails.page.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SensorHomePage />} />
        <Route path=":sensorId" element={<SensorDetailsPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

export default App;

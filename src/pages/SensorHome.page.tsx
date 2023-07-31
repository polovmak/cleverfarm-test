import MainLayout from "../layouts/Main.layout.tsx";
import SensorCard from "../components/SensorCard.tsx";
import { MockSensors } from "../store/mockSensors.ts";

const SensorHomePage = () => {
  return (
    <MainLayout>
      {MockSensors.map((sensor) => (
        <SensorCard sensor={sensor} key={sensor.id} />
      ))}
    </MainLayout>
  );
};

export default SensorHomePage;

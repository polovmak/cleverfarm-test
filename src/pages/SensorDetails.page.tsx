import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Sensor } from "../infrastructure/Sensor.ts";
import { Button, Grid } from "@mui/material";
import { MapComponent } from "../components/Map.tsx";
import SensorDetailsLayout from "../layouts/SensorDetails.layout.tsx";
import { MockSensors } from "../store/mockSensors.ts";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const SensorDetailsPage = () => {
  const [sensor, setSensor] = useState<Sensor>();
  const { sensorId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const sens = MockSensors.find((mockSensor) => mockSensor.id === sensorId);
    if (sens) {
      setSensor(sens);
    } else {
      navigate("/");
    }
  }, [navigate, sensorId]);

  return (
    <SensorDetailsLayout
      sensorInformation={
        <Grid
          container
          justifyContent="space-between"
          display="flex"
          flexDirection="row"
          alignItems="baseline"
        >
          <Grid item xs={12} md={2}>
            <Button href="/" style={{ color: "#00a179" }}>
              <ArrowBackIosIcon />
              Back
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            <h1>{sensor?.name}</h1>
          </Grid>
          <Grid item xs={12} md={2}>
            <h5>{`${sensor?.coordinates[0]}  ${sensor?.coordinates[1]}`}</h5>
          </Grid>
        </Grid>
      }
      map={sensor ? <MapComponent coordinates={sensor.coordinates} /> : <></>}
    />
  );
};

export default SensorDetailsPage;

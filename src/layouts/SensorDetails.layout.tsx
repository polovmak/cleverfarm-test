import { ReactNode } from "react";
import { Grid } from "@mui/material";

interface ISensorDetailsLayoutProps {
  sensorInformation: ReactNode;
  map: ReactNode;
}

const SensorDetailsLayout = ({
  sensorInformation,
  map,
}: ISensorDetailsLayoutProps) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {sensorInformation}
      </Grid>
      <Grid item xs={12}>
        {map}
      </Grid>
    </Grid>
  );
};

export default SensorDetailsLayout;

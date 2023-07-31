import { Sensor } from "../infrastructure/Sensor.ts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Grid } from "@mui/material";

interface ISensorCardProps {
  sensor: Sensor;
}

const SensorCard = ({ sensor }: ISensorCardProps) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {sensor.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {sensor.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            style={{
              color: "#00a179",
            }}
            href={`${sensor.id}`}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SensorCard;

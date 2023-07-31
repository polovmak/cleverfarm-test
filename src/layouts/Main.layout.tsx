import { Grid } from "@mui/material";
import { ReactNode } from "react";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <Grid container spacing={3}>
      {children}
    </Grid>
  );
};

export default MainLayout;

import logo from "./logo.svg";
import "./App.css";

//Apollo
import { useQuery, gql } from "@apollo/client";

//MUI
import * as React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  const LAUNCHES = gql`
    query GetLaunches {
      launches {
        mission_name
        mission_id
        rocket {
          rocket_name
          rocket {
            company
            name
            mass {
              kg
            }
          }
        }
        launch_site {
          site_name
        }
        launch_date_local
      }
    }
  `;

  const { loading, error, data } = useQuery(LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const launchesArray = data.launches;

  const launchesMap = launchesArray.map((element) => (
    <Grid item key={element.mission_name} xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography>{element.mission_name}</Typography>
          <Typography>{element.launch_date_local}</Typography>
        </CardContent>
      </Card>
    </Grid>
  ));

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {launchesMap}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default App;

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
  CardActions,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//React Router
import { Routes, Route, Link } from "react-router-dom";

//Components
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e93131",
    },
    secondary: {
      main: "#5e17e6",
    },
  },
});

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

const App = () => {
  const { loading, error, data } = useQuery(LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <ThemeProvider theme={theme}>
      <Link to="/">
        <Button variant="contained">Home</Button>
      </Link>
      <Routes>
        <Route
          path="/"
          element={<Launches loading={loading} error={error} data={data} />}
        />
        <Route
          path="/launches/:launchId"
          element={<Launch loading={loading} error={error} data={data} />}
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

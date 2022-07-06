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
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Table,
} from "@mui/material";

//React Router
import { useParams } from "react-router-dom";

const Launch = ({ loading, error, data }) => {
  const params = useParams();
  const launchesArray = data.launches;

  const table = (rocket) => (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rocket name</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Mass</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={rocket.name}>
            <TableCell component="th" scope="row">
              {rocket.name}
            </TableCell>
            <TableCell align="right">{rocket.company}</TableCell>
            <TableCell align="right">{rocket.mass.kg} kg</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  const searchedLaunch = launchesArray.map((element) => {
    if (element.mission_name === params.launchId) {
      return (
        <Container maxWidth="lg" key={element.mission_name}>
          <Typography variant="h1" color="initial">
            {element.mission_name}
          </Typography>

          <Typography variant="h2" color="initial">
            {element.launch_date_local}
          </Typography>

          <Typography variant="h3" color="initial">
            Rocket:
          </Typography>

          {table(element.rocket.rocket)}
        </Container>
      );
    }
  });

  return searchedLaunch;
};

export default Launch;

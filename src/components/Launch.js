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

//React Router
import { useParams } from "react-router-dom";

const Launch = ({ loading, error, data }) => {
  const params = useParams();
  const launchesArray = data.launches;

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
        </Container>
      );
    }
  });

  return searchedLaunch;
};

export default Launch;

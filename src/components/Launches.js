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
import { Link } from "react-router-dom";

const Launches = ({ loading, error, data }) => {
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
        <CardActions>
          <Link to={"/launches/" + element.mission_name}>
            <Button variant="text">Link</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  ));

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {launchesMap}
      </Grid>
    </Container>
  );
};

export default Launches;

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

const Launch = () => {
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

  return (
    <Container launchesArray={launchesArray} maxWidth="lg" sx={{ py: 8 }}>
      loremas;fknsduhifghsdfjh fhsdf jhdsgf jdskhfgsdfj sdfjhbs jhfbj sd
    </Container>
  );
};

export default Launch;

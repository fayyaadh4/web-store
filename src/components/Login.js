import React from "react";
import {
  Card,
  CardContent,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import Center from "./Center";
import { createAPIEndpoint, ENDPOINTS } from "../api";

export default function Login() {
  const login = (e) => {
    e.preventDefault();
    createAPIEndpoint(ENDPOINTS.user)
      .post(values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <Center>
      <Card sx={{ width: 400 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ my: 3 }}>
            Log in
          </Typography>
          <Box
            sx={{
              "& .MuiTextField-root": {
                margin: 1,
                width: "90%",
              },
            }}
          >
            <form noValidate>
              <TextField label="Email" name="email" variant="outlined" />
              <TextField label="Name" name="name" variant="outlined" />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ width: "90%" }}
              >
                Start
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>
  );
}

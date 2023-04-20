import React from "react";
import Data from "../Features/data";
import "./style.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
const Features = () => {
  return (
    <Box>
    <Stack direction={"row"} spacing={15} sx={{ mt: 6, ml: 22 }}>
      {/* <section className="Features background">
        <div className="container grid2"> */}

      {Data.map((val, index) => {
        return (
          <Card sx={{ width: 300, height: 161 }}>
            <CardContent>
              <Box
                sx={{
                  mx: 11,
                  mb: 2,
                  borderRadius: "50%",
                  backgroundColor: "grey",
                  width: 60,
                  height: 60,
                  fontWeight: 600,
                }}
              >
                <i>{val.cover}</i>
              </Box>
              <Typography
                variant="h1"
                component="h2"
                sx={{ mx: 1, fontWeight: "bold", fontSize: 17 }}
                color="text.main"
                gutterBottom
              >
                {val.title}
              </Typography>

              <Typography variant="body2" sx={{ alignItems: "center", mx: 2 }}>
                {val.decs}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
    </Box>
  );
};

export default Features;

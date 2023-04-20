import React from "react";
import Stack from "@mui/material/Stack";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import Data from "./data.js";

const ProductSmallBox = () => {
  return (
    <Stack direction="Column"  sx={{mt:4}}>
      {Data.map((val, index) => {
        return (
         
            <List
              sx={{
                width: "100%",
                maxWidth: 400,
                border: 1,
                bgcolor: "background.paper",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <i>{val.cover}</i>
                </ListItemAvatar>
                <ListItemText primary={val.title} secondary={val.decs} />
              </ListItem>
            </List>
      
        );
      })}
    </Stack>
  );
};

export default ProductSmallBox;

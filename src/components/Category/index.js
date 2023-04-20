import * as React from "react";
import "./style.css";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Height } from "@mui/icons-material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
export default function NestedList() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
        ></ListSubheader>
      }
    >
      <ListItemButton
        sx={{
          flexDirection: "column",
          width: 150,
          height: 150,
          textAlign: "center",
          justifyContent: "center",

          "&:hover": {
            backgroundColor: "#db4444",
            color: "#ffffff",
          },
        }}
      >
        <ListItemIcon>
          <PhoneAndroidIcon
            sx={{
              textAlign: "center",
              "&:hover": {
                color: "#fffff",
              },
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
    </List>
  );
}

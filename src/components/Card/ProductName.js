import { Typography } from "@mui/material";

export default function ProductName(props) {
  return (
    <Typography gutterBottom variant="h6" sx={{ fontFamily:"serif",}}>
    {props.title.substring(0, 15)}
  </Typography>
  );
}

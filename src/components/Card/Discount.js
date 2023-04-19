import {Box,Button} from "@mui/material";

export default function Discount(props) {
    return (
        <Box
        component="span"
        sx={{
          p: 0.7,
          width: "40",

          mb: 1,
          position: "absolute",
        }}
      >
        <Button
          sx={{
            color: "white",
            fontFamily:"serif",
            fontSize:11,
            position: "absolute",
            zIndex: 8,
            backgroundColor: "#e94560",
          }}
        >
          {props.id}% Off
        </Button>
      </Box>
    )}
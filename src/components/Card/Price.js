import {Stack,Typography} from "@mui/material";

export default function Price(props) {
    return (
        <Stack direction={"row"} spacing={1}>
        <Typography gutterBottom variant="button"sx={{color:"#DB4444",fontSize:17}}>
                  {`$${props.price}.00`}
                </Typography>
                <Typography gutterBottom variant="button"sx={{color:"grey",textDecoration:"line-through",fontSize:17}}>
                  {`$50.00`}
                </Typography>
        </Stack>
    )}
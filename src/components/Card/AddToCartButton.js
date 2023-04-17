import {Box} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    fontFamily: "serif",
    width: "100%",
    height: "50px",
    zIndex: 8,
  
    position: "absolute",
    opacity: 0,
    mt: 8,
    backgroundColor: "black",
    "&:hover": {
      opacity: 1,
      backgroundColor: "black",
    },
  }));
export default function AddToCart(props) {
    return (
        <Box
                sx={{
                  my: 27,
                  position: "absolute",
                  width: "100%",
                  height: "50px",
                }}
              >
                <Link to={`/products/${props.id}`}>
                  <ColorButton>add to cart</ColorButton>
                </Link>
              </Box>
    )}
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea,Rating } from "@mui/material";
import Price from "./Price";
import ProductName from "./ProductName";
import AddToCart from "./AddToCartButton";
import Discount from "./Discount";
import Like from "./LikeProduct";
export default function SingleCard(props) {
    return (
      
        <Card>
        <CardActionArea>
          <AddToCart id={props.id} />
          <Discount id={props.id} />
          <Like id={props.id} likes={props.likes} setLikes={props.setLikes} />
          <CardMedia
            component="img"
            sx={{ height: 250, width: 270, objectFit: "scale-down", zIndex: -1 }}
            image={props.image}
          ></CardMedia>

          <CardContent>
            <ProductName title={props.title} />

            <Price price={props.price} />

            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </CardContent>
        </CardActionArea>
      </Card>
    )}
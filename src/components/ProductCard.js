import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Rating,
  Typography,
  Grow,
} from "@mui/material";
import React, { useState } from "react";
import {Tilt} from "react-tilt";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  const { name, cost, rating, image, _id } = product;
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  const handleAddToCartClick = (e) => {
    handleAddToCart(e);
    setShowAddedToCart(true);
    setTimeout(() => setShowAddedToCart(false), 1500);
  };

  const tiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 300,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
   
      <Tilt options={tiltOptions} style={{ transformStyle: "preserve-3d" }}>
        <Card
          className="card"
          sx={{
            maxWidth: 385,
            transition: "box-shadow 0.3s",
            "&:hover": {
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={image}
              alt={name}
              sx={{
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
            <CardContent style={{ transform: "translateZ(30px)" }}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                ${cost}
              </Typography>
              <Rating name="read-only" value={rating} readOnly />
            </CardContent>
          </CardActionArea>
          <CardActions style={{ transform: "translateZ(30px)" }}>
            <Button
              size=""
              fullWidth
              color="primary"
              variant="contained"
              value={_id}
              onClick={handleAddToCartClick}
            >
              <AddShoppingCartOutlined /> ADD TO CART
            </Button>
          </CardActions>
        </Card>
      </Tilt>

  );
};

export default ProductCard;

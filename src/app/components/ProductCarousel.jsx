import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { products } from "./Product";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import styles from "./ProductCarousel.module.css";
import { useTheme } from "@emotion/react";
import Link from "next/link";

const ProductCarousel = () => {
  const theme = useTheme();
  var settings = {
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    dots: false,
    infinite: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box sx={{ mt: "50px", mb: "60px" }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
            textAlign: "center",
            color: theme.palette.text.main,
          }}
        >
          OUR&nbsp;
          <Typography
            component="span"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
            }}
          >
            PRODUCTS
          </Typography>
        </Typography>
        <Divider
          sx={{
            borderColor: theme.palette.primary.main,
            borderBottomWidth: "5px",
            width: "70px",
            mx: "auto",
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            mt: "10px",
            color: theme.palette.text.subHead,
          }}
        ></Typography>
      </Box>
      <div className="slider-container" style={{ marginTop: "20px" }}>
        <Slider {...settings}>
          {products?.map((el) => (
            <div key={el.id} className={styles.cardContainer}>
              <Card
                sx={{ marginLeft: "10px" }}
                className={`${styles.card} ${styles.customSlideWidth}`}
              >
                <CardMedia
                  component="img"
                  image={el.image}
                  alt={el.name}
                  width={"100%"}
                />
                <CardContent className={styles.cardContent}>
                  <Typography variant="h6" component="div">
                    {el.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className={styles.description}
                  >
                    {el.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProductCarousel;

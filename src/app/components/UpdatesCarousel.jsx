import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { products } from "./Product";
import { Box, Typography, Button, ButtonGroup } from "@mui/material";
import { useTheme } from "@emotion/react";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  East as EastIcon,
} from "@mui/icons-material";
const UpdatesCarousel = () => {
  const theme = useTheme();

  const settings = {
    dots: false, // Hide default dots
    arrows: false, // Hide default arrows
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  };

  // Ref for manual control of slider
  const sliderRef = React.useRef();

  return (
    <Box
      sx={{
        marginTop: "20px",
        position: "relative",
        maxWidth: "800px",
        border: "Mixed solid rgba(255, 255, 255, 1)",
        boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
        display: "inline",
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {products?.map((el, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "80px",
              flexDirection: { xs: "column", md: "column" },
              padding: 3,
              borderRadius: "10px",
              margin: "auto",

              width: "100%", // Ensure the slide takes full width of the container
            }}
          >
            <Box sx={{ minWidth: "100px", my: "auto", textAlign: "center" }}>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  fontSize: "18px",
                  writingMode: "vertical-rl", // Rotate text vertically
                  transform: "rotate(180deg)", // Ensure text reads top to bottom
                }}
              >
                10 Dec 2024
              </Typography>
            </Box>
            <Box sx={{ mt: "30px" }}>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "black",
                  fontSize: { md: "24px", sm: "18px" },
                }}
              >
                Reliflex win the Best Design Award
              </Typography>
              <br />
              <br />
              <Typography
                sx={{ color: theme.palette.text.secondary, fontSize: "16px" }}
              >
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus.
              </Typography>
              <br />
              <Typography
                sx={{ color: theme.palette.text.secondary, fontSize: "16px" }}
              >
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus.
              </Typography>
              <br />
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  textDecoration: "underline",
                }}
              >
                Read more
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>

      {/* Custom navigation buttons */}
      <Box sx={{ position: "absolute", bottom: "-30px", right: "100px" }}>
        <ButtonGroup
          variant="contained"
          sx={{ height: { xl: "60px", lg: "50px" } }}
        >
          <Button
            startIcon={<KeyboardBackspaceIcon />}
            onClick={() => sliderRef.current.slickPrev()}
            sx={{
              color: "white",
              px: { xl: 4.5, lg: 3 },
              borderRadius: 0,
              borderRight: "1px solid white !important",
              ":hover": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            Prev
          </Button>
          <Button
            endIcon={<EastIcon />}
            onClick={() => sliderRef.current.slickNext()}
            sx={{
              color: "white",
              px: { xl: 4.5, lg: 3 },
              borderRadius: 0,
              borderLeft: "1px solid white",
              ":hover": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            Next
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default UpdatesCarousel;

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
const updates = [
  {
    date: "Nov 14, 2024",
    heading:
      "Reliflex Enhances India's Manufacturing Hub Status with State-of-the-Art Machinery of More than 60 Market",
    content1:
      "Reliflex is indeed one of the world's leading brands regarding high-quality machinery and equipment. And today, with more than 60 countries, the company continues to grow and expand its reach to a new standard of the industry committed to high-class manufacturing through reliable products catering to the needs of different businesses at various places in the world.",
    content2:
      " The company collaborates with some of the best OEMs that ensure quality to the best of its potential to the customers. Thus, collaboration with the best of the lot in the industry helps Reflex gain competitive advantage. With the help of the frontline OEMs, the company uses the expertise to provide unique solutions that cater to the needs of diversified customers.",
  },
  {
    date: "10 dec 2024",
    heading:
      "Reliflex Machinery & Equipment to Enter Consumer Electronics Market to Drive Innovation in the Every Tech",
    content1:
      "Reliflex Machinery & Equipment forms a bold step in the Consumer Electronics (CE) sector, bringing the company's sense of good quality and innovation into play in the day-to-day life of technology. Reliflex Machinery & Equipment was known for manufacturing high-quality machinery and equipment for the construction industry. Now, it is aiming to expand its markets.",
    content2:
      "Innovation and top-quality standards will be what propel the creation of these products to fit modern consumers' needs.The fact that Reliflex has ventured into the CE sector seems to indicate its desire to be current for a product that, while high-performance, also proved friendly to its users as well.",
  },
  {
    date: "10 dec 2024",
    heading: "Reliflex brand now pioneers made-in-India machinery innovation.",
    content1:
      "Reliflex started in 2011 by importing good-quality machinery from countries such as Germany, Japan, China, Turkey, the USA, and Vietnam. This is what laid the ground for starting the company into the global machinery market.Over the years, Reliflex has become an in-house manufacturing company and assembles most of their machines within India.",
    content2:
      "Local production will enable Reliflex to offer cheaper solutions without compromising on the quality and level of performance on which it has acquired a reputation. The company is also better positioned to deliver its services faster to the clients.",
  },
  {
    date: "10 dec 2024",
    heading:
      "Reliflex offers innovative, high-quality, high-performance products designed to improve modern living.",
    content1:
      "Reliflex will leverage its expertise in manufacturing reliable, high-performance consumer electronics. The new venture will focus on innovative products for both the consumer and corporate markets. Relifex will concentrate on devices that will actually improve efficiency and connectedness, making life more comfortable and simpler.Reliflex shall ensure that their consumer electronics are crafted to improve quality in life.",
    content2:
      "As the company ventures into this new market, Reliflex pushes the limits of technology, still delving into solutions that sustain the natural life of modern living.",
  },
  {
    date: "10 dec 2024",
    heading:
      "Reliflex From Global Imports to Made-in-India Excellence in Machinery Manufacturing",
    content1:
      "We are a research and development organization. For instance, the new innovative products that we have launched at Reliflex - helping us distinguish ourselves from others in the construction machinery sector - keep us ahead by ensuring that our products conform to international standards as well as to the specific requirements of India's construction industry. This, in turn, not only cements our market position but also strengthens our commitment to delivering high performance machinery that keeps pace with the dynamically shifting needs of the industry.",
    content2: "",
  },

  {
    date: "10 dec 2024",
    heading:
      "Reliflex Advances India's Role in Global Machinery with World-Class Manufacturing",
    content1:
      "Reliflex has made a significant shift from importing machinery to manufacturing its products within India. This move reflects the company’s dedication to enhancing the Indian manufacturing environment.By setting up local production, Reliflex can now create top-quality equipment that meets the needs of both domestic and international markets.",
    content2:
      "Also Reliflex ensures that each product is reliable and durable. This shift to local manufacturing also allows for quicker delivery times and better cost efficiency. Reliflex has decided to manufacture within India, strengthening its position as a key player in the global machinery market.",
  },
];
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
        {updates?.map((el, index) => (
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
            <Box sx={{ minWidth: "100px", my: "auto", textAlign: "left" }}>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 500,
                  fontSize: "18px",
                }}
              >
                {el.date}
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
                {el.heading}
              </Typography>
              <br />
              <br />
              <Typography
                sx={{ color: theme.palette.text.secondary, fontSize: "16px" }}
              >
                {el.content1}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "16px",
                  mt: "15px",
                }}
              >
                {el.content2}
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

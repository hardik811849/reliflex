"use client";
import { useTheme } from "@emotion/react";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Image from "next/image";
import dotsGrid from "../../../public/dot.svg";
import redMachine from "../../../public/ourServices/redMachine.svg";
import icon1 from "../../../public/ourServices/Icon1.svg";
import icon2 from "../../../public/ourServices/Icon2.svg";
import icon3 from "../../../public/ourServices/Icon3.svg";
import icon4 from "../../../public/ourServices/Icon4.svg";
import icon5 from "../../../public/ourServices/Icon5.svg";
import icon6 from "../../../public/ourServices/Icon6.svg";

const OurServices = () => {
  const theme = useTheme();
  const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  const ServiceItem = ({ imgSSrc, imgAlt, heading, content }) => {
    return (
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: { xl: "450px", lg: "380px", md: "400px", sm: "350px" },
          boxShadow:
            " rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
        }}
      >
        <Image
          src={imgSSrc}
          alt={imgAlt}
          style={{ marginTop: 28, marginBottom: 16 }}
        />
        <Typography
          sx={{
            color: theme.palette.text.subHead,
            fontWeight: 400,
            fontSize: "22px",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.subHead,
            lineHeight: "18px",
            px: "60px",
            mb: 6,
            textAlign: "center",
          }}
        >
          {content}
        </Typography>
      </Grid>
    );
  };
  return (
    <Box sx={{ mb: 1 }}>
      {screenSizeSm && (
        <Image
          src={dotsGrid}
          alt="dots grid"
          style={{
            width:
              screenSizeSm && !screenSizeLg
                ? "250px"
                : screenSizeLg && !screenSizeXl
                ? "300px"
                : "auto",
            height: "auto",
          }}
        />
      )}
      <Typography
        sx={{
          color: theme.palette.text.main,
          fontWeight: 700,
          fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
          textAlign: "center",
          mt: { sm: -12, xs: 0 },
        }}
      >
        <Typography
          component="span"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
            fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
          }}
        >
          OUR
        </Typography>{" "}
        SERVICES
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
          fontSize: "18px",
        }}
      >
        What we do?
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: { lg: -30, md: -25, sm: -20 },
        }}
      >
        <Image
          src={redMachine}
          alt="red machine"
          style={{
            width:
              screenSizeXs && !screenSizeLg
                ? "160px"
                : screenSizeLg && !screenSizeXl
                ? "200px"
                : "auto",
            height: "auto",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Grid
          container
          gap={4}
          width={{ xxl: "76%", xl: "95%" }}
          sx={{ ml: { xl: 0, lg: 2, md: 10, sm: 2.5 } }}
        >
          <ServiceItem
            imgSSrc={icon1}
            imgAlt="icon1"
            heading="CONSTRUCTION"
            content="Reliflex Machinery & Equipment construction solutions are reliable with high-performance machinery designed to fulfill varied requirements, with efficiency and durability."
          />
          <ServiceItem
            imgSSrc={icon2}
            imgAlt="icon2"
            heading="CONCRETE TRANSPORT"
            content="Reliflex provides efficient and durable concrete transport solutions that assure smooth handling for all your construction projects."
          />
          <ServiceItem
            imgSSrc={icon3}
            imgAlt="icon3"
            heading="RENOVATION"
            content="Our Machinery is one of the most reliable equipment and tools in its kind, which was helpful in renovating jobs performed with perfection and efficiency."
          />
          <ServiceItem
            imgSSrc={icon4}
            imgAlt="icon4"
            heading="General Builder"
            content="We assist general builders with flexible, high-quality machinery that can accomplish a wide range of construction duties in the easiest manners possible."
          />
          <ServiceItem
            imgSSrc={icon5}
            imgAlt="icon5"
            heading="Refurbishment"
            content="Reliflex  services offer reliable tools and machines to make refurbishment projects easier, ensuring quality results every time."
          />
          <ServiceItem
            imgSSrc={icon6}
            imgAlt="icon6"
            heading="Security Service"
            content="Our services have strong and reliable security solutions with advanced technology to keep your operations safe and secure."
          />
        </Grid>
      </Box>
    </Box>
  );
};
export default OurServices;

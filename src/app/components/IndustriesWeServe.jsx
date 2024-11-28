"use client";
import { useTheme } from "@emotion/react";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Image from "next/image";
import leftYellowMachine from "../../../public/industriesWeServe/leftYellowMachine.svg";
import Shape1 from "../../../public/industriesWeServe/Shape1.svg";
import Shape2 from "../../../public/industriesWeServe/Shape2.svg";
import Shape3 from "../../../public/industriesWeServe/Shape3.svg";
import Shape4 from "../../../public/industriesWeServe/Shape4.svg";
import Shape5 from "../../../public/industriesWeServe/Shape5.svg";
import Shape6 from "../../../public/industriesWeServe/Shape6.svg";
import Shape7 from "../../../public/industriesWeServe/Shape7.svg";
import Shape8 from "../../../public/industriesWeServe/Shape8.svg";
import Shape9 from "../../../public/industriesWeServe/Shape9.svg";
import Shape10 from "../../../public/industriesWeServe/Shape10.svg";
import Shape11 from "../../../public/industriesWeServe/Shape11.svg";
import Shape12 from "../../../public/industriesWeServe/Shape12.svg";
import Shape13 from "../../../public/industriesWeServe/Shape13.svg";
import Shape14 from "../../../public/industriesWeServe/Shape14.svg";

const IndustriesWeServe = () => {
  const theme = useTheme();
  const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  const Industry = ({ imgSrc, imgAlt, text }) => {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 1.5px 4px 0px",
            padding: "20px",
          }}
        >
          <Image
            src={imgSrc}
            alt={imgAlt}
            style={{
              width:
                screenSizeXs && !screenSizeSm
                  ? "35px"
                  : screenSizeSm && !screenSizeLg
                  ? "26px"
                  : screenSizeLg && !screenSizeXl
                  ? "35px"
                  : "auto",
              height: "auto",
            }}
          />
          <Typography
            sx={{
              textTransform: "uppercase",
              ml: { xl: "20px", lg: "10px", md: "8px", sm: "14px", xs: "12px" },
              fontSize: { lg: "14px", xl: "16px", md: "13px" },
            }}
          >
            {text}
          </Typography>
        </Box>
      </Grid>
    );
  };
  return (
    <Box sx={{ mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: { xl: -24, lg: -8, md: -5 },
        }}
      >
        <Image
          src={leftYellowMachine}
          alt="yellow machine"
          style={{
            width:
              screenSizeXs && !screenSizeLg
                ? "150px"
                : screenSizeLg && !screenSizeXl
                ? "200px"
                : "auto",
            height: "auto",
          }}
        />
      </Box>
      <Typography
        sx={{
          textTransform: "uppercase",
          color: theme.palette.primary.main,
          fontWeight: 700,
          fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
          textAlign: "center",
          mt: { sm: -20, xs: 2 },
        }}
      >
        industries we serve{" "}
        <Typography
          component="span"
          sx={{
            color: theme.palette.text.main,
            fontWeight: 700,
            fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
          }}
        >
          {" "}
          RECENT
        </Typography>{" "}
      </Typography>
      <Divider
        sx={{
          borderColor: theme.palette.primary.main,
          borderBottomWidth: "5px",
          width: "70px",
          mx: "auto",
          mt: "8px",
        }}
      />
      <Typography
        sx={{
          textAlign: "center",
          mx: "auto",
          mt: "10px",
          color: theme.palette.text.subHead,
          fontSize: { xl: "18px", lg: "16px" },
          width: { sm: "40%", xs: "90%" },
        }}
      >
        We are creating new standards by realizing products that are best of
        their kind in their respective field.
      </Typography>
      <Box sx={{ mt: 5, mx: { xxl: 28, xl: 10, lg: 6, md: 4, sm: 4 } }}>
        <Grid
          container
          spacing={4}
          sx={{
            color: theme.palette.text.main,
            fontWeight: 700,
          }}
        >
          <Industry imgSrc={Shape1} imgAlt="shape1" text="Construction" />
          <Industry imgSrc={Shape2} imgAlt="shape2" text="Agriculture" />
          {/* <Industry
            imgSrc={Shape3}
            imgAlt="shape3"
            text="Waste recycling and demolition"
          /> */}
          {/* <Industry imgSrc={Shape4} imgAlt="shape4" text="Waste Management" /> */}
          <Industry imgSrc={Shape5} imgAlt="shape5" text="Landscaping" />
          <Industry
            imgSrc={Shape6}
            imgAlt="shape6"
            text="Roads/ Infrastructure"
          />
          <Industry imgSrc={Shape7} imgAlt="shape7" text="Mining" />
          {/* <Industry imgSrc={Shape8} imgAlt="shape8" text="Biomass" /> */}
          {/* <Industry imgSrc={Shape9} imgAlt="shape9" text="Cotton" /> */}
          <Industry imgSrc={Shape10} imgAlt="shape10" text="Oil and Gas" />
          <Industry
            imgSrc={Shape11}
            imgAlt="shape11"
            text="Chemicals & Fertilizers"
          />
          <Industry imgSrc={Shape12} imgAlt="shape12" text="Bricks industry" />
          {screenSizeMd && <Grid xs={3} />}
          <Industry imgSrc={Shape13} imgAlt="shape13" text="Stone Crushers" />
          <Industry imgSrc={Shape14} imgAlt="shape14" text="Miscellaneous" />
          {screenSizeMd && <Grid xs={3} />}
        </Grid>
      </Box>
    </Box>
  );
};

export default IndustriesWeServe;

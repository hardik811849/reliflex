"use client";
import { Check as CheckIcon } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";
import Image from "next/image";
import dotsGrid from "../../../../public/dot.svg";
import styled from "@emotion/styled";
import AboutUsLeftImageGrid from "./AboutUsLeftImageGrid";
import AboutHeading from "./AboutHeading";
import SideCraneWithBg from "./SideCraneWithBg";
import Link from "next/link";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
  },
}));

const About = ({ showHeader, showSideCrane }) => {
  const theme = useTheme();
  const screenSizeXXl = useMediaQuery(theme.breakpoints.up("xxl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  return (
    <Box sx={{ mt: "50px", mb: "60px" }}>
      {showHeader && <AboutHeading />}

      {screenSizeSm && (
        <Box sx={{ mt: "-90px", ml: "54px" }}>
          <Image
            src={dotsGrid}
            alt="dots-grid"
            style={{
              height:
                screenSizeSm && !screenSizeLg
                  ? "180px"
                  : screenSizeLg && !screenSizeXXl
                    ? "220px"
                    : screenSizeXXl
                      ? "100%"
                      : "100%",
              width: "auto",
            }}
          />
        </Box>
      )}
      <Box
        className="content-container"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          mt: { sm: "-80px", xs: 0 },
          ml: { sm: "54px", xs: 2 },
          mx: { xs: 2, sm: 0 },
        }}
      >
        {screenSizeXs && !screenSizeSm ? (
          <Box sx={{ mx: "auto" }}>
            <AboutUsLeftImageGrid />
          </Box>
        ) : (
          <AboutUsLeftImageGrid />
        )}
        <Box
          width={{ lg: "38%", md: "42%", sm: "80%" }}
          sx={{ mx: { sm: "auto", md: 0 }, mb: { xs: 10, sm: 0 } }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: {
                xxl: "46px",
                xl: "38px",
              },
              color: theme.palette.text.subHead,
            }}
          > Reliflex Machinery & Equipments is your trusted partner for high-quality construction solutions and services.
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.grey,
              fontSize: { md: "14px", xxl: "18px" },
              fontWeight: 400,
              lineHeight: { md: "16px", xxl: "20px" },
              mt: "20px",
            }}
          >
            <p 
            sx={{
              paddingBottom: "10px",
            }}>Reliflex Machinery & Equipment Company is growing fast in the company with over five years of experience designing, manufacturing, and supplying customers with a wide range of high quality machinery and equipment. Established in 2011 and mainly importing imported machinery from global leaders countries such as Germany, Japan, China, Turkey, USA, and Vietnam. Over time, Reliflex has slowly built up its capabilities by manufacturing and assembling many of its products in India, thus providing both international standards and local expertise. </p>

            <p>Reliflex has its headquarters located in Bangalore, India. Here again, the company has expanded successfully in the major Indian cities by opening warehouses as well as showrooms. Apart from that, the company also boasts of having more than 800 dealers across India along with a rapidly growing outlet in international markets like Tanzania, Kenya, Dubai, Russia, and China.</p>

          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              py: "20px",
            }}
          >
            <StyledBadge badgeContent={<CheckIcon fontSize="small" />} />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xxl: "22px", xl: "18px", lg: "16px" },
                color: theme.palette.text.subHead,
                ml: { xl: 0, lg: 2.5, md: 3, sm: 0, xs: 3 },
              }}
            >
              From concepts to completions stands the test of time.
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              pb: "20px",
            }}
          >
            <StyledBadge badgeContent={<CheckIcon fontSize="small" />} />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xxl: "22px", xl: "18px", lg: "16px" },
                color: theme.palette.text.subHead,
                ml: { xl: 0, lg: 2.5, md: 3, sm: 0, xs: 3 },
              }}
            >
              Your trusted partner for reliable construction services.
            </Typography>
          </Grid>
          <Button
            variant="contained"
            sx={{
              color: "white",
              height: { xl: "40px", xxl: "48px" },
              width: "174px",
              mt: "20px",
            }}
          >
            <Link href="/about-us">Explore more</Link>
          </Button>
        </Box>
      </Box>
      {showSideCrane && <SideCraneWithBg />}
    </Box>
  );
};

export default About;

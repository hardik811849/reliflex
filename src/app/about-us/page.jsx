"use client";
import React from "react";
import {
  Box,
  CircularProgress,
  Typography,
  circularProgressClasses,
  useMediaQuery,
} from "@mui/material";
import {
  WorkOutlineOutlined,
  GroupsOutlined,
  EmojiEventsOutlined,
} from "@mui/icons-material";
import allSectionsHero from "../../../public/allSectionsHero.svg";
import Image from "next/image";
import About from "../components/About/About";
import { useTheme } from "@emotion/react";
import AboutHeading from "../components/About/AboutHeading";
import SideCraneWithBg from "../components/About/SideCraneWithBg";
import AboutUsPageContent from "../components/About/AboutUsPageContent";

const AboutUsPage = () => {
  const theme = useTheme();
  const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  const styles = {
    container: {
      position: "relative",
      width: "100vw",
      height: "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      color: "white",
      fontSize: {
        xs: "2rem",
        md: "2.5rem",
        xl: "56px",
        xxl: "60px",
      },
      fontWeight: 700,
      textAlign: "center",
    },
    subHeading: {
      fontWeight: 500,
      fontSize: "18px",
      textAlign: "center",
    },
  };

  const CircularAbout = ({ Icon, number, percent, heading, description }) => {
    return (
      <Box
        sx={{
          height: { sm: "418px", xs: "320px" },
          width: { sm: "401px", xs: "300px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: { md: "auto", sm: 2 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: { xl: "250px", lg: "200px", xs: "150px" },
            width: { xl: "250px", lg: "200px", xs: "150px" },
          }}
        >
          <CircularProgress
            variant="determinate"
            sx={{
              color: (theme) => theme.palette.grey[200],
            }}
            size={
              screenSizeXs && !screenSizeLg
                ? 150
                : screenSizeLg && !screenSizeXl
                ? 200
                : 250
            }
            thickness={1.2}
            value={100}
          />
          <CircularProgress
            variant="determinate"
            disableShrink
            sx={{
              color: theme.palette.primary.main,
              animationDuration: "550ms",
              position: "absolute",
              left: 0,
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: "round",
              },
            }}
            size={
              screenSizeXs && !screenSizeLg
                ? 150
                : screenSizeLg && !screenSizeXl
                ? 200
                : 250
            }
            thickness={1.7}
            value={percent}
          />
          <Box
            sx={{
              position: "absolute",
              top: { xl: "25%", lg: "12%", xs: "32px" },
              right: { xl: "35%", lg: "30%", xs: "35%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon
              sx={{
                fontSize: { lg: "78px", xs: "45px" },
                color: "#00000033",
              }}
            />
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                fontSize: { lg: "40px", xs: "24px" },
              }}
            >
              {number}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xl: "32px", lg: "26px" },
                mt: 3,
                mb: 1,
              }}
            >
              {heading}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.subHead,
                fontSize: { sm: "16px", xs: "14px" },
                fontWeight: 400,
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Box sx={styles.container}>
        <Image
          src={allSectionsHero}
          alt="section hero image"
          fill
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(22, 29, 57, 0.8)",
            zIndex: 1,
          }}
        />
        <Box sx={{ position: "absolute", zIndex: 10 }}>
          <Typography sx={styles.heading}>About Us</Typography>
          <Typography sx={[styles.subHeading, { color: "white" }]}>
            <Typography
              component="span"
              sx={[{ color: "#646776" }, styles.subHeading]}
            >
              Home &nbsp;&nbsp;/&nbsp;&nbsp; Company &nbsp;&nbsp;/&nbsp;&nbsp;{" "}
            </Typography>
            About Us
          </Typography>
        </Box>
      </Box>
      <Box sx={{ pb: 3 }}>
        <About />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          my: { lg: 8, md: 1 },
          mx: { md: 20, sm: 10, xs: "auto" },
        }}
      >
        <CircularAbout
          Icon={WorkOutlineOutlined}
          number={986}
          percent={60}
          heading="Projects Done"
          description="Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie."
        />
        <CircularAbout
          Icon={GroupsOutlined}
          number={357}
          percent={40}
          heading="Trusted Clients"
          description="Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie."
        />
        <CircularAbout
          Icon={EmojiEventsOutlined}
          number={1423}
          percent={80}
          heading="Awards Earned"
          description="Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie."
        />
      </Box>
      <AboutHeading />
      <Box sx={{ mt: { sm: -20, xs: 10 }, ml: -10 }}>
        <SideCraneWithBg leftSideCrane />
      </Box>
      <Box sx={{ mb: 10 }}>
        <AboutUsPageContent />
      </Box>
    </Box>
  );
};
export default AboutUsPage;

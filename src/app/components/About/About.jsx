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
          >
            Reliflex Machinery & Equipment&apos;s is a Division of Reliflex Exim
            Services Pvt Ltd
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
            Reliflex Machinery & Equipment&apos;s is a rapidly growing company
            involved in the design and manufacture of an extensive range of
            Machinery & Equipment&apos;s for the building and construction
            industry. We started our business by importing these machineries
            from countries like Germany, Japan, China, Turkey, USA, Vietnam to
            name few in the year 2011. Most of the machines are also
            manufactured or assembled in In....
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
              Delivering Premium Quality Machinery And Equipment For...
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
              Delivering Premium Quality Machinery And Equipment For...
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
            Explore more
          </Button>
        </Box>
      </Box>
      {showSideCrane && <SideCraneWithBg />}
    </Box>
  );
};

export default About;

"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";
import Image from "next/image";
import manInFrame from "../../../../public/about-us/manInFrame.svg";
import videoInFrame from "../../../../public/about-us/videoInFrame.svg";
import medalImg from "../../../../public/about-us/medal.svg";
const AboutUsLeftImageGrid = () => {
  const theme = useTheme();
  const screenSizeXXl = useMediaQuery(theme.breakpoints.up("xxl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg")); //yes up lg but its xl
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  const backgroundBorderCSS =
    screenSizeXs && !screenSizeSm
      ? {
          height: "150px",
          width: "150px",
          border: `6px solid ${theme.palette.primary.main}`,
          mt: "-200px",
          ml: "80px",
        }
      : screenSizeSm && !screenSizeMd
      ? {
          height: "200px",
          width: "120px",
          border: `6px solid ${theme.palette.primary.main}`,
          mt: "-280px",
          ml: "200px",
        }
      : screenSizeMd && !screenSizeLg
      ? {
          height: "200px",
          width: "120px",
          border: `6px solid ${theme.palette.primary.main}`,
          mt: "-320px",
          ml: "200px",
        }
      : screenSizeLg && !screenSizeXXl
      ? {
          height: "300px",
          width: "220px",
          border: `6px solid ${theme.palette.primary.main}`,
          mt: "-420px",
          ml: "200px",
        }
      : screenSizeXXl
      ? {
          height: "367px",
          width: "271px",
          border: `10px solid ${theme.palette.primary.main}`,
          mt: "-470px",
          ml: "200px",
        }
      : "";
  const videoCss =
    screenSizeXs && !screenSizeSm
      ? {
          position: "absolute",
          top: "140px",
          right: "-20px",
          height: "110px",
          width: "auto",
        }
      : screenSizeSm && !screenSizeMd
      ? {
          position: "absolute",
          top: "150px",
          right: "-40px",
          height: "160px",
          width: "auto",
        }
      : screenSizeMd && !screenSizeLg
      ? {
          position: "absolute",
          top: "150px",
          right: "-70px",
          height: "160px",
          width: "auto",
        }
      : screenSizeLg && !screenSizeXXl
      ? {
          position: "absolute",
          top: "225px",
          right: "-100px",
          height: "220px",
          width: "auto",
        }
      : screenSizeXXl
      ? {
          position: "absolute",
          top: "255px",
          right: "-100px",
          // height: "220px",
          // width: "auto",
        }
      : "";
  return (
    <Box
      position="relative"
      sx={{
        mx: { xs: "auto", md: 0 },
        mb: { xs: 20, md: 0 },
        mr: { xs: 2, sm: "auto" },
      }}
    >
      <Image
        src={manInFrame}
        alt="man-in-frame"
        style={{
          height:
            screenSizeXs && !screenSizeSm
              ? "250px"
              : screenSizeSm && !screenSizeMd
              ? "320px"
              : screenSizeMd && !screenSizeLg
              ? "350px"
              : screenSizeLg && !screenSizeXXl
              ? "480px"
              : screenSizeXXl
              ? "540px"
              : "100%",
          width: "auto",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: {
            xl: "13%",
            xxl: "10.4%",
            lg: "7.1%",
            md: "6.2%",
            sm: "7%",
            xs: "7%",
          },
          right: {
            xl: "77.6%",
            xxl: "73.7%",
            lg: "75.7%",
            md: "86%",
            sm: "86.18%",
            xs: "80.2%",
          },
          backgroundColor: theme.palette.primary.main,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: {
            xxl: "180px",
            xl: "150px",
            lg: "158px",
            sm: "100px",
            xs: "80px",
          },
          height: { xxl: "150px", xl: "120px", lg: "125px", md: "100px" },
        }}
      >
        <Image
          src={medalImg}
          alt="medal"
          style={{
            height:
              screenSizeXs && !screenSizeLg
                ? "20px"
                : screenSizeLg && !screenSizeXXl
                ? "30px"
                : screenSizeXXl
                ? "50px"
                : "50px",

            width: "auto",
          }}
        />
        <Typography
          sx={{
            color: "white",
            fontWeight: 600,
            fontSize: { xxl: "20px", lg: "18px", md: "14px" },
          }}
        >
          10 Years
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontWeight: 400,
            fontSize: {
              xxl: "16px",
              lg: "14px",
              md: "12px",
              sm: "13px",
              xs: "12px",
            },
            letterSpacing: "0.6px",
          }}
        >
          Working Experience
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: { lg: "34.2%", md: "25%", sm: "30.1%", xs: "38%" },
          right: { lg: "98.5%", md: "98%", sm: "98%", xs: "98%" },
          rotate: "-45deg",
          width: 0,
          height: 0,
          borderTop: {
            sm: "40px solid transparent",
            xs: "25px solid transparent",
          },
          borderBottom: {
            sm: "40px solid transparent",
            xs: "25px solid transparent",
          },
          borderLeft: {
            sm: `40px solid ${theme.palette.primary.main}`,
            xs: `25px solid ${theme.palette.primary.main}`,
          },
        }}
      ></Box>
      <Box sx={backgroundBorderCSS} />
      <Image src={videoInFrame} alt="video in frame" style={videoCss} />
    </Box>
  );
};
export default AboutUsLeftImageGrid;

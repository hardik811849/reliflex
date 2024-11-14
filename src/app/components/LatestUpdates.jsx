"use client";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import latestUpdate1 from "../../../public/19092.jpg";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  East as EastIcon,
} from "@mui/icons-material";
import UpdatesCarousel from "./UpdatesCarousel";

const LatestUpdates = () => {
  const theme = useTheme();
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  return (
    <Box sx={{ mb: 10, mt: { xs: 2, sm: 0 } }}>
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: 900,
          color: theme.palette.text.grey,
          fontSize: {
            xxl: "112px",
            xl: "78px",
            lg: "60px",
            md: "50px",
            sm: "40px",
            xs: "30px",
          },
          ml: { sm: "31%", xs: 6 },
        }}
      >
        Latest Updates
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: "100px",
          mt: 10,
          mx: { xxl: 12 },
        }}
      >
        <UpdatesCarousel />
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            boxShadow: {
              xs: 0,
              md: "rgba(217, 217, 217, 1) -5px 5px, rgba(217, 217, 217, 1) -10px 10px, rgba(217, 217, 217, 1) -15px 15px, rgba(217, 217, 217, 1) -20px 20px, rgba(217, 217, 217, 1) -25px 25px",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { xl: "460px", lg: "430px", md: "380px", sm: "260px" },
            height: { xl: "498px", lg: "460px" },
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { lg: "28px", md: "24px" },
              color: "white",
              mb: 3,
            }}
          >
            Durability You Can Trust
          </Typography>
          <Image
            src={latestUpdate1}
            alt="latest update1"
            width={
              screenSizeXs && !screenSizeMd
                ? 250
                : screenSizeMd && !screenSizeLg
                ? 320
                : 400
            }
          />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { lg: "18px", md: "16px" },
              color: "white",
              lineHeight: { xl: "31px", lg: "26px" },
              mx: { md: 4, sm: 1, xs: 2 },
              mt: 2,
              mb: { xs: 2, sm: 0 },
            }}
          >
            The Reliflex Machinery & Equipment company is known to have
            excellent strength, which is quite strong and can be used even in
            the toughest construction environments.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default LatestUpdates;

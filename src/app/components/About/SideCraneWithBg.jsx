"use client";
import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";

import lightFrameBg from "../../../../public/about-us/lightFrameBg.svg";
import constructionCrane from "../../../../public/about-us/constructionCrane.svg";
const SideCraneWithBg = ({ leftSideCrane }) => {
  const theme = useTheme();
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeXXl = useMediaQuery(theme.breakpoints.up("xxl"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  return (
    <Box
      sx={{
        mt: "-60px",
        display: "flex",
        justifyContent: "flex-end",
        transform: leftSideCrane && `rotateY(180deg)`,
        mr: { lg: 0, md: -10 },
      }}
    >
      <Image
        src={lightFrameBg}
        alt="construction site light shade image"
        style={{
          marginRight: "-390px", //290px is the width of construction crane img
          height:
            screenSizeLg && !screenSizeXXl
              ? "220px"
              : screenSizeXXl
              ? "100%"
              : "100%",
          width: "auto",
        }}
      />
      <Image
        src={constructionCrane}
        alt="construction crane"
        style={{
          height:
            screenSizeXs && !screenSizeLg
              ? "240px"
              : screenSizeLg && !screenSizeXXl
              ? "270px"
              : screenSizeXXl
              ? "100%"
              : "100%",
          width: "auto",
          marginRight: "120px",
        }}
      />
    </Box>
  );
};

export default SideCraneWithBg;

"use client";
import { Box } from "@mui/material";

const YoutubeLogo = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "76px",
        height: "54px",
        backgroundColor: "#e21",
        padding: " 0 15px",
        borderRadius: " 50% / 11%",
        ":before": {
          content: '""',
          position: "absolute",
          backgroundColor: "inherit",
          top: "10%",
          bottom: "10%",
          right: "-5%",
          left: "-4.5%",
          borderRadius: " 5% / 50%",
        },
      }}
    >
      <Box
        component="span"
        sx={{
          width: "100%",
          height: "54px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "3px",
          "::before": {
            content: '""',
            zIndex: 1,
            width: 0,
            height: 0,
            borderLeft: "20px solid #fff",
            borderTop: " 13px solid transparent",
            borderBottom: "13px solid transparent",
          },
        }}
      ></Box>
    </Box>
  );
};

export default YoutubeLogo;

import { useTheme } from "@emotion/react";
import { ArrowOutward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const barBenderSeriesData = [
  {
    id: 1,
    content: "GW20S",
  },
  {
    id: 2,
    content: "GW20",
  },
  {
    id: 3,
    content: "GW20D",
  },
  {
    id: 4,
    content: "GF26",
  },
  {
    id: 5,
    content: "GWH32",
  },
  {
    id: 6,
    content: "GWH36",
  },
  {
    id: 7,
    content: "GW40",
  },
  {
    id: 8,
    content: "GW42J",
  },
  {
    id: 9,
    content: "GW42R",
  },
  {
    id: 10,
    content: "GW42D",
  },
  {
    id: 11,
    content: "GW50",
  },
];

export const BarBenderSeriesSD = ({ setDemoSelectModel }) => {
  const theme = useTheme();
  const styles = {
    fontStyle: {
      fontWeight: 600,
      fontSize: { md: "16px", sm: "13px" },
    },
  };

  return barBenderSeriesData?.map((item) => {
    return (
      <Box
        key={item.id}
        sx={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          ml: 6,
          my: 2,
          color: item.id === 5 ? theme.palette.primary.main : "#000",
          ":hover": {
            cursor: "pointer",
          },
        }}
        onClick={() => item.id === 5 && setDemoSelectModel(true)}
      >
        <ArrowOutward sx={{ fontSize: "1rem", mr: 2 }} />
        <Typography sx={[styles.fontStyle, { fontWeight: 400 }]}>
          {item.content}
        </Typography>
      </Box>
    );
  });
};

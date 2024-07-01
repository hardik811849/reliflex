import { useTheme } from "@emotion/react";
import { ArrowOutward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const suspendedPlatformData = [
  {
    id: 1,
    content: "RLP800",
  },
  {
    id: 2,
    content: "RLP500",
  },
];

export const SuspendedPlatformSD = ({ setDemoSelectModel }) => {
  const theme = useTheme();
  const styles = {
    fontStyle: {
      fontWeight: 600,
      fontSize: { md: "16px", sm: "13px" },
    },
  };

  return suspendedPlatformData?.map((item) => {
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

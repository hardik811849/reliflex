"use client";
import { useTheme } from "@emotion/react";
import { Box, Divider, Typography } from "@mui/material";

const AboutHeading = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
          textAlign: "center",
          color: theme.palette.text.main,
        }}
      >
        <Typography
          component="span"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
            fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
          }}
        >
          ABOUT
        </Typography>
        {"  "}
        US
      </Typography>
      <Divider
        sx={{
          borderColor: theme.palette.primary.main,
          borderBottomWidth: "5px",
          width: "70px",
          mx: "auto",
        }}
      />
      <Typography
        sx={{
          textAlign: "center",
          mt: "10px",
          color: theme.palette.text.subHead,
        }}
      >
        Serving Worldwide Construction Industry Since 2011
      </Typography>
    </Box>
  );
};

export default AboutHeading;

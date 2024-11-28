"use client";
import { useTheme } from "@emotion/react";
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import {
  FormatQuote as FormatQuoteIcon,
  RadioButtonChecked,
} from "@mui/icons-material";
import React from "react";
import Image from "next/image";
import greenVehicleLeftSide from "../../../public/publicFeedback/greenVehicleLeftSide.svg";
import dotsGrid from "../../../public/dot.svg";
import vector from "../../../public/publicFeedback/vector.svg";
const PublicFeedback = () => {
  const theme = useTheme();
  const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));

  const logoStyle = {
    width:
      screenSizeXs && !screenSizeSm
        ? "70px"
        : screenSizeSm && !screenSizeMd
        ? "80px"
        : screenSizeMd && !screenSizeLg
        ? "100px"
        : screenSizeLg && !screenSizeXl
        ? "120px"
        : "auto",
    height: "auto",
  };

  return (
    <Box sx={{ mb: 10 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-start", mt: -10 }}>
        <Box sx={{ ml: { xxl: 0, md: "-50px", sm: "-40px" } }}>
          <Image
            src={greenVehicleLeftSide}
            alt="green vehicle"
            style={{
              width:
                screenSizeXs && !screenSizeLg
                  ? "220px"
                  : screenSizeLg && !screenSizeXl
                  ? "250px"
                  : "auto",
              height: "auto",
            }}
          />
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: {
              xxl: "-78px",
              xl: "-140px",
              lg: "-200px",
              md: "-230px",
              sm: "-240px",
              xs: "-300px",
            },
            marginTop: { lg: 2, xl: 0 },
          }}
        >
          <Image src={dotsGrid} alt="dots grid" />
        </Box>
      </Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
          textAlign: "center",
          color: theme.palette.text.main,
          mt: { sm: -20, xs: 2 },
        }}
      >
        CUSTOMER&apos;S&nbsp;
        <Typography
          component="span"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
            fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
          }}
        >
          FEEDBACK &nbsp;
        </Typography>
        ABOUT RELIFLEX
      </Typography>
      <Divider
        sx={{
          borderColor: theme.palette.primary.main,
          borderBottomWidth: "5px",
          width: "70px",
          mx: "auto",
          mt: "8px",
        }}
      />
      <Typography
        sx={{
          textAlign: "center",
          mx: "auto",
          mt: "10px",
          color: theme.palette.text.subHead,
          fontSize: "18px",
          width: "40%",
        }}
      >
        What Client says?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          mt: 10,
          pb: 10,
          mx: { xl: 20, md: 10, sm: 2 },
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box sx={{ mx: { xs: 2, sm: 0 } }}>
          <FormatQuoteIcon
            sx={{
              fontSize: { lg: "80px", md: "50px" },
              color: theme.palette.primary.main,
              mb: { xl: 5, lg: 2 },
            }}
          />
          <Typography
            sx={{
              color: "#888888",
              width: { md: "500px", sm: "350px" },
              fontSize: { md: "16px", sm: "14px" },
            }}
          >
            When it comes to dependable construction equipment, Reliflex
            Machinery & Equipment stands out as a beacon of quality and service.
            From the moment our project team made contact, it was clear we were
            in good hands. The knowledge and professionalism of their staff set
            a remarkably high standard; they took the time to understand our
            specific needs and provided tailored recommendations that made all
            the difference.
            <p>
              The equipment itself is top-notch! We recently rented several
              heavy-duty excavators and earth movers, all of which were in
              pristine condition. You can tell that Reliflex takes great pride
              in maintaining their machinery, as everything overperformed
              relative to our expectations. Having reliable tools on-site not
              only ensures safety but enhances efficiency—an invaluable trait
              when working on tight deadlines.
            </p>
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.main,
              fontWeight: 500,
              fontSize: { lg: "24px", md: "18px" },
              mt: { xl: 6, lg: 3, md: 3, sm: 2, xs: 2 },
            }}
          >
            Summit Builders
          </Typography>
          <Typography
            sx={{ color: theme.palette.primary.main, fontWeight: 400 }}
          >
            Spain
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PublicFeedback;

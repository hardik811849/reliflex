"use client";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Thumbnail from "../../../public/catalog.png";
import allSectionsHero from "../../../public/allSectionsHero.svg";
import redMachine from "../../../public/ourServices/redMachine.svg";
import {
  MailOutline,
  PhonePausedOutlined,
  PlaceOutlined,
} from "@mui/icons-material";
import { useState } from "react";
const CatalougePage = () => {
  const theme = useTheme();
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));

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
    boxShadow: {
      boxShadow: "0px 0px 10px 0px #00000040",
    },
    color: {
      color: "#878787",
    },
  };
  return (
    <Box sx={{ backgroundColor: "white", pb: 15 }}>
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
          <Typography sx={styles.heading}>Catalouge</Typography>
          <Typography sx={[styles.subHeading, { color: "white" }]}>
            <Typography
              component="span"
              sx={[{ color: "#646776" }, styles.subHeading]}
            >
              Home &nbsp;&nbsp;/&nbsp;&nbsp;
            </Typography>
            Catalouge
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
            textAlign: "center",
            color: theme.palette.primary.main,
          }}
        >
          <Typography
            component="span"
            sx={{
              color: theme.palette.text.main,
              fontWeight: 700,
              fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
            }}
          >
            Download
          </Typography>
          {"  "}
          Catalouge
        </Typography>
        <Divider
          sx={{
            borderColor: theme.palette.primary.main,
            borderBottomWidth: "5px",
            width: "70px",
            mx: "auto",
          }}
        />
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: { xs: 2, md: 3 }, // Padding adjustments for responsiveness
          }}
        >
          <Grid
            container
            justifyContent="center"
            sx={{
              width: "100%", // Ensure the Grid takes full width
              maxWidth: "1200px", // Limit the maximum width
              px: { xs: 2, md: 3 }, // Padding for responsiveness
              mt: 3, // Space between contact info and form section
            }}
          >
            <Image
              src={Thumbnail}
              style={{
                width: "100%", // Ensure the image is responsive
                maxWidth: "100%", // Prevent image overflow
                objectFit: "contain", // Maintain aspect ratio
              }}
              alt="Thumbnail"
            />
          </Grid>
          <Box>
            <Button
              sx={{
                cursor: "pointer",
                backgroundColor: "green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { lg: "175px", md: "130px", xs: "inherit" },
                height: { lg: "40px", xxl: "48px", md: "36px", xs: "30px" },
                color: "white",
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "darkgreen", // Change to dark green on hover
                },
              }}
              variant="text"
            >
              Download
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CatalougePage;

"use client";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Thumbnail from "../../../public/7718725_125.jpg";
import allSectionsHero from "../../../public/banner.jpg";
import Link from "next/link";
import WhatsAppIconOutlinedIcon from "@mui/icons-material/WhatsApp";

const CatalougePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  console.log("isSmallScreen:", isSmallScreen);

  const styles = {
    container: {
      position: "relative",
      width: "100vw",
      height: isSmallScreen ? "300px" : "600px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      color: "white",
      fontSize: {
        xs: "1.5rem",
        md: "2.5rem",
        xl: "56px",
        xxl: "60px",
      },
      fontWeight: 700,
      textAlign: "center",
    },
    subHeading: {
      fontWeight: 500,
      fontSize: { xs: "14px", sm: "16px", md: "18px" },
      textAlign: "center",
    },
  };

  return (
    <Box sx={{ backgroundColor: "white", pb: 10 }}>
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

      <Box sx={{ mt: 10, px: { xs: 2, md: 3 } }}>
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
          Our Catalouge
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
          }}
        >
          <Box sx={{ display: "flex", gap: "20px" }}>
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
                fontSize: { md: "14px", xxl: "20px", xs: "14px" },
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
              variant="text"
            >
              <Link href="/reliflex_catalog.pdf" target="_blank">
                Download
              </Link>
            </Button>
            <Button
              sx={{
                backgroundColor: "orange",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { lg: "175px", md: "130px", xs: "inherit" },
                height: { lg: "40px", xxl: "48px", md: "36px", xs: "30px" },
                color: "white",
                fontSize: { md: "14px", xxl: "20px", xs: "14px" },
                fontWeight: 600,
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "darkorange",
                },
              }}
            >
              <Link href="/inquire"> Inquire Now</Link>
            </Button>
            <Link href="https://wa.me/+919901257700" target="_blank">
              {" "}
              <WhatsAppIconOutlinedIcon
                sx={{ color: "green", cursor: "pointer", fontSize: "40px" }}
              />
            </Link>
          </Box>
          <Grid
            container
            justifyContent="center"
            sx={{
              width: "100%",
              px: { xs: 2, md: 3 },
              mt: 3,
              overflow: "hidden",
            }}
          >
            <iframe
              src="/reliflex_catalog.pdf"
              style={{
                width: isSmallScreen ? "100%" : "100%", // Always responsive
                height: isSmallScreen ? "500px" : "800px", // Adjust height for smaller devices
                maxWidth: "1000px",
                border: "none", // Ensure no unwanted borders
              }}
              title="Catalog"
            ></iframe>
          </Grid>

          <Box sx={{ display: "flex", gap: "20px", mt: "50px" }}>
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
                fontSize: { md: "14px", xxl: "20px", xs: "14px" },
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
              }}
              variant="text"
            >
              <Link href="/reliflex_catalog.pdf" target="_blank">
                Download
              </Link>
            </Button>
            <Button
              sx={{
                backgroundColor: "orange",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: { lg: "175px", md: "130px", xs: "inherit" },
                height: { lg: "40px", xxl: "48px", md: "36px", xs: "30px" },
                color: "white",
                fontSize: { md: "14px", xxl: "20px", xs: "14px" },
                fontWeight: 600,
                borderRadius: "4px",
                "&:hover": {
                  backgroundColor: "darkorange",
                },
              }}
            >
              <Link href="/inquire"> Inquire Now</Link>
            </Button>
            <Link href="https://wa.me/+919901257700" target="_blank">
              {" "}
              <WhatsAppIconOutlinedIcon
                sx={{ color: "green", cursor: "pointer", fontSize: "40px" }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CatalougePage;

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

const CatalougePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
          <Grid
            container
            justifyContent="center"
            sx={{
              width: "100%",
              maxWidth: "1200px",
              px: { xs: 2, md: 3 },
              mt: 3,
            }}
          >
            <Image
              src={Thumbnail}
              style={{
                width: "100%",
                maxWidth: "1000px",
                height: "auto",
                objectFit: "contain",
              }}
              alt="Thumbnail"
            />
          </Grid>
          {/* Button */}
          <Box sx={{ mt: 2 }}>
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
                fontSize: { md: "14px", xxl: "16px", xs: "14px" },
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "darkgreen",
                },
                mt: "80px",
              }}
              variant="text"
            >
              <Link
                href="https://drive.google.com/file/d/1FMta2vPU7lTAk8FDERJ6zF-Ktklallre/view?usp=sharing"
                target="_blank"
              >
                Download
              </Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CatalougePage;

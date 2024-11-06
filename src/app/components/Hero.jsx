"use client";
import React from "react";
import Head from "next/head";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import hero1 from "../../../public/hero/hero1.svg";

export const metadata = {
  title: "Reliable Machinery for Heavy Constructions",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
const Hero = () => {
  const styles = {
    container: {
      position: "relative",
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    heading: {
      color: "white",
      fontSize: {
        xs: "1.7rem",
        sm: "2rem",
        md: "2.5rem",
        xl: "56px",
        xxl: "70px",
      },
      fontWeight: 700,
      textAlign: "center",
    },
    subHeading: {
      fontWeight: 400,
      fontSize: { xl: "18px", xxl: "24px" },
      color: "white",
      textAlign: "center",
      mx: { sm: "15%", md: "18%" },
    },
    buttonContainer: {
      width: { xs: "100%", md: "47%", lg: "36%", xl: "31%", xxl: "26%" },
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-between",
      alignItems: "center",
      mx: "auto",
      mt: "40px",
    },
  };

  return (
    <>
      <Head>
        <title>Reliable Machinery for Heavy Constructions</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Head>
      <Box sx={styles.container}>
        <Image
          src={hero1}
          alt="hero1 image"
          fill
          style={{ objectFit: "cover" }}
        />
        <Box sx={{ position: "absolute", width: "80%" }}>
          <Typography sx={styles.heading}>
            RELIABLE MACHINERY FOR HEAVY CONSTRUCTIONS
          </Typography>
          <Typography sx={styles.subHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet.
          </Typography>
          <Box sx={styles.buttonContainer}>
            <Button
              variant="contained"
              sx={{
                color: "white",
                height: { xl: "40px", xxl: "48px" },
                width: "174px",
                mb: { xs: "20px", md: 0 },
              }}
            >
              Explore more
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                height: { xl: "40px", xxl: "48px", borderWidth: "2px" },
                width: "165px",
              }}
            >
              Get in touch
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;

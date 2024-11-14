"use client";
import React from "react";
import Head from "next/head";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import hero1 from "../../../public/hero/hero1.svg";
import hero2 from "../../../public/slider2.gif";
import hero3 from "../../../public/hero3.gif";
import hero4 from "../../../public/hero4.png";
import Slider from "react-slick";
import Link from "next/link";

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
    container2: {
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
      gap: "20px",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-between",
      alignItems: "center",
      mx: "auto",
      mt: "40px",
    },
  };
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
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
      <Slider {...settings}>
        <Box sx={styles.container}>
          <Image
            src={hero1}
            alt="hero1 image"
            fill
            style={{ objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "80%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "Center",
                flexDirection: "column",
              }}
            >
              <Typography sx={styles.heading}>
                RELIABLE MACHINERY FOR HEAVY CONSTRUCTIONS
              </Typography>
              <Typography sx={styles.subHeading}>
                Find the best, most reliable heavy-duty construction equipment
                that can perform the most demanding heavy construction jobs.
                Reliflex Machinery & Equipment is tough and performs well; it is
                safe, efficient, and maximizes productivity on every job site.
              </Typography>
              <Box sx={styles.buttonContainer}>
                <Link href="/about-us">
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      height: { xl: "40px", xxl: "48px" },
                      width: "174px",
                      mb: { xs: "20px", md: 0 },
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#00AFF9",
                      },
                    }}
                  >
                    Explore more
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    height: { xl: "40px", xxl: "48px", borderWidth: "2px" },
                    width: "165px",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#00AFF9",
                    },
                  }}
                >
                  Get in touch
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.container2}>
          <Image
            src={hero2}
            alt="hero1 image"
            fill
            style={{ objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              background: "rgba(0, 40, 57, 0.7)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "80%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "Center",
                flexDirection: "column",
              }}
            >
              <Typography sx={styles.heading}>
                Reliflex Equipment is Reliable Machinery for Construction Needs
              </Typography>
              <Typography sx={styles.subHeading}>
                Reliflex Machinery & Equipment is a leading manufacturer of all
                types of construction machinery used in construction work.
                Construction Machinery and equipment are designed and created to
                meet all your construction site necessities and needs.
              </Typography>
              <Box sx={styles.buttonContainer}>
                <Link href="/about-us">
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      height: { xl: "40px", xxl: "48px" },
                      width: "174px",
                      mb: { xs: "20px", md: 0 },
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#00AFF9",
                      },
                    }}
                  >
                    Explore more
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    height: { xl: "40px", xxl: "48px", borderWidth: "2px" },
                    width: "165px",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#00AFF9",
                    },
                  }}
                >
                  Get in touch
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.container}>
          <Image
            src={hero3}
            alt="hero1 image"
            fill
            style={{ objectFit: "cover" }}
          />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              background: "rgba(0, 40, 57, 0.8)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "80%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "Center",
                flexDirection: "column",
              }}
            >
              <Typography sx={styles.heading}>
                Reliflex Machinery & Equipment Durable, Low-Maintenance
                Machinery Excellence
              </Typography>
              <Typography sx={styles.subHeading}>
                Reliflex Machinery & Equipment, heavy duty and require minimal
                maintenance. Detailed description of our designing,
                manufacturing and customer approach is mentioned in the About Us
                Section.
              </Typography>
              <Box sx={styles.buttonContainer}>
                <Link href="/about-us">
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      height: { xl: "40px", xxl: "48px" },
                      width: "174px",
                      mb: { xs: "20px", md: 0 },
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#00AFF9",
                      },
                    }}
                  >
                    Explore more
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    height: { xl: "40px", xxl: "48px", borderWidth: "2px" },
                    width: "165px",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#00AFF9",
                    },
                  }}
                >
                  Get in touch
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.container}>
          <Image
            src={hero4}
            alt="hero1 image"
            fill
            style={{ objectFit: "cover" }}
          />
          {/* <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              background: "rgba(0, 40, 57, 0.8)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "80%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "Center",
                flexDirection: "column",
              }}
            >
              <Typography sx={styles.heading}>
                RELIABLE MACHINERY FOR HEAVY CONSTRUCTIONS
              </Typography>
              <Typography sx={styles.subHeading}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet.
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
          </Box> */}
        </Box>
      </Slider>
    </>
  );
};

export default Hero;

"use client";
import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  Button,
  Stack,
  Snackbar,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import reliflexLogo from "../../../public/reliflex-logo.svg";
import Image from "next/image";
import WhatsAppIconOutlinedIcon from "@mui/icons-material/WhatsApp";
import IosShareTwoToneIcon from "@mui/icons-material/IosShareTwoTone";
import ShoppingCartIconOutlinedIcon from "@mui/icons-material/ShoppingCart";
import CallIconOutlinedIcon from "@mui/icons-material/Call";
import StarIconOutlinedIcon from "@mui/icons-material/Star";
import LinkedInIconOutlinedIcon from "@mui/icons-material/LinkedIn";
import Head from "next/head";

const Bio = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const links = [
    {
      label: "Products Catalog",
      url: "https://www.reliflexmachinery.in/catalog",
      icon: <ShoppingCartIconOutlinedIcon sx={{ color: "white" }} />,
    },
    {
      label: "Whatsapp",
      url: "https://wa.me/+919901257700",
      icon: <WhatsAppIconOutlinedIcon sx={{ color: "white" }} />,
    },
    {
      label: "Call Now",
      url: "tel:9901257700",
      icon: <CallIconOutlinedIcon sx={{ color: "white" }} />,
    },
    {
      label: "Rate Us",
      url: "https://maps.app.goo.gl/hJbTuFt5mwfaByaw9",
      icon: <StarIconOutlinedIcon sx={{ color: "white" }} />,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/adnan-shabbir-boxwala-23b8aa76/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      icon: <LinkedInIconOutlinedIcon sx={{ color: "white" }} />,
    },
  ];
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } else {
        setMessage("Sharing is not supported on this browser.");
        setOpen(true);
      }
    } catch (error) {
      setMessage("Failed to share the page.");
      setOpen(true);
      console.error("Error sharing:", error);
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Head>
        <title>Home | Reliflex Machinery & Equipment</title>
        <meta
          name="Reliflex Machinery & Equipment"
          content="Welcome to the home page of Reliflex Machinery & Equipmen."
        />
      </Head>
      <Container
        maxWidth={false} // Disables the default maxWidth restriction
        style={{
          textAlign: "center",
          padding: "2rem 0",
          paddingTop: "90px",
          paddingRight: "35px",
          display: "flex",
          flexDirection: "column", // Arranges child elements in a column
          alignItems: "center", // Centers the items horizontally
          height: "100vh", // Makes the container cover the full height of the viewport
          width: "100vw", // Makes the container cover the full width of the viewport
          backgroundImage: "url('/circle.jpg')",
          backgroundSize: "cover", // Makes the image cover the entire container
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents repeating the image
        }}
      >
        {/* <Box>
          <Image
            alt="Profile Picture"
            src={reliflexLogo}
            sx={{ width: 120, height: 120, margin: "0 auto" }}
          />
          <Typography variant="body1" color="white" sx={{ marginBottom: 2 }}>
            Welcome to our official link page!
          </Typography>
        </Box> */}

        <Stack spacing={3} sx={{
          padding: "20px", width: {
            xs: "90%", // Extra small screens
            sm: "80%", // Small screens
            md: "70%", // Medium screens
            lg: "50%", // Large and above
          },
        }}>
          {links.map((link, index) => (
            <Button
              key={index}
              variant="contained"
              color="primary"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: "none",
                borderRadius: "25px",
                padding: "25px 20px",
                fontSize: "32px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: "10px" }}>
                {link.icon}
                <Typography
                  variant="body1"
                  color="white"
                  sx={{ fontSize: "20px" }}
                >
                  {link.label}
                </Typography>
              </Box>
              <IosShareTwoToneIcon />
            </Button>
          ))}
        </Stack>
        <Stack spacing={3} sx={{
          padding: "20px", paddingTop: "0px", width: {
            xs: "90%", // Extra small screens
            sm: "80%", // Small screens
            md: "70%", // Medium screens
            lg: "50%", // Large and above
          },
        }}>
          <Box
            variant="contained"
            bgcolor="white"
            sx={{
              textTransform: "none",
              borderRadius: "25px",
              padding: "25px 20px",
              fontSize: "32px",
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
            onClick={handleShare}
          >
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography
                variant="body1"
                color="black"
                sx={{ fontSize: "20px" }}
              >
                Share this page
              </Typography>
            </Box>
            <IosShareTwoToneIcon sx={{ color: "black" }} />
            <Snackbar
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              message={message}
              action={
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Bio;

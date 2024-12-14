import React from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  Button,
  Stack,
} from "@mui/material";
import reliflexLogo from "../../../public/reliflex-logo.svg";
import Image from "next/image";
import WhatsAppIconOutlinedIcon from "@mui/icons-material/WhatsApp";
import IosShareTwoToneIcon from "@mui/icons-material/IosShareTwoTone";
const Bio = () => {
  const links = [
    {
      label: "Products Catalog",
      url: "https://www.reliflexmachinery.in/catalog",
      icon: <WhatsAppIconOutlinedIcon sx={{ color: "white" }} />,
    },
    {
      label: "Whatsapp",
      url: "https://wa.me/9901257700",
      icon: <WhatsAppIconOutlinedIcon />,
    },
    {
      label: "Call Now",
      url: "tel:9901257700",
      icon: <WhatsAppIconOutlinedIcon />,
    },
    {
      label: "Rate Us",
      url: "https://maps.app.goo.gl/hJbTuFt5mwfaByaw9",
      icon: <WhatsAppIconOutlinedIcon />,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/adnan-shabbir-boxwala-23b8aa76/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      icon: <WhatsAppIconOutlinedIcon />,
    },
  ];

  return (
    <Container
      maxWidth="sm"
      style={{ textAlign: "center", padding: "2rem 0", marginTop: "90px" }}
    >
      <Box>
        <Image
          alt="Profile Picture"
          src={reliflexLogo}
          sx={{ width: 120, height: 120, margin: "0 auto" }}
        />
        <Typography variant="body1" color="white" sx={{ marginBottom: 2 }}>
          Welcome to our official link page!
        </Typography>
      </Box>

      <Stack spacing={2}>
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
              padding: "30px 20px",
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: "10px" }}>
              {link.icon}
              <Typography variant="body1" color="white" sx={{}}>
                {link.label}
              </Typography>
            </Box>
            <IosShareTwoToneIcon />
          </Button>
        ))}
      </Stack>
    </Container>
  );
};

export default Bio;

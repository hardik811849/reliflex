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
import allSectionsHero from "../../../public/allSectionsHero.svg";
import redMachine from "../../../public/ourServices/redMachine.svg";
import {
  MailOutline,
  PhonePausedOutlined,
  PlaceOutlined,
} from "@mui/icons-material";
import { useState } from "react";

import emailjs from "@emailjs/browser";
const InquirePage = () => {
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    phone: "",
    email: "",
    subject: "",
  });
  const [isSent, setIsSent] = useState(false);
  const theme = useTheme();
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const SERVICE_ID = "service_1dkhuxh";
    const TEMPLATE_ID = "template_bz14796";
    const PUBLIC_KEY = "yCZ5eP3BpwFIOT0U_";
    console.log("formData", formData);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSent(true);
        setInterval(() => {
          setIsSent(false);
        }, 6000);
        setFormData({
          department: "",
          name: "",
          phone: "",
          email: "",
          subject: "",
        });
      })
      .catch((err) => {
        console.error("Failed", err);
      });
  };
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
          <Typography sx={styles.heading}>Inquire Now</Typography>
          <Typography sx={[styles.subHeading, { color: "white" }]}>
            <Typography
              component="span"
              sx={[{ color: "#646776" }, styles.subHeading]}
            >
              Home &nbsp;&nbsp;/&nbsp;&nbsp;
            </Typography>
            Inquire Now
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
            INQUIRE
          </Typography>
          {"  "}
          NOW
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
            mx: "auto",
            width: { sm: "46%", xs: "90%" },
          }}
        >
          We’re here to listen and provide the solutions you need. Send us your
          inquiry, and let’s take the first step toward achieving your goals
          together!
        </Typography>
      </Box>
      {screenSizeMd && (
        <Box
          sx={{
            display: { lg: "flex", md: "none" },
            justifyContent: "flex-end",
            mt: -20,
            mr: 2,
          }}
        >
          <Image src={redMachine} alt="red machine" />
        </Box>
      )}
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
        {/* Contact Info Section */}

        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            width: "80%",
            mt: 3, // Space between contact info and form section
          }}
        >
          {/* Address Box */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                py: 5,
                px: 5,
                minWidth: "100%",
                mb: { md: 4, sm: 1 },
                backgroundColor: "#f9f9f9",
                boxShadow: "0px 0px 10px 0px  rgba(0, 0, 0, 0.25)",
                borderRadius: "5px",
              }}
            >
              <PlaceOutlined
                sx={{
                  height: "40px",
                  width: "40px",
                  color: "#878787",
                }}
              />
              <Typography sx={{ color: "#878787", fontWeight: 600 }}>
                65, Shed 2A, Mantapa Bannerghatta Jigani Road, Bangalore-560083,
                Karnataka, India.
              </Typography>
            </Box>
          </Grid>

          {/* Phone Box */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                py: 5,
                px: 5,
                minWidth: "100%",
                backgroundColor: "#f9f9f9",
                boxShadow: "0px 0px 10px 0px #00000040",
                borderRadius: "5px",
              }}
            >
              <PhonePausedOutlined
                sx={{
                  height: "40px",
                  width: "40px",
                  color: "#878787",
                  mr: 2,
                }}
              />
              <Typography sx={{ color: "#878787", fontWeight: 600 }}>
                <a
                  href="tel:+919901257700"
                  style={{ color: "#878787", textDecoration: "none" }}
                >
                  +91 99012 57700
                </a>
                <br />
                <a
                  href="tel:+916360555872"
                  style={{ color: "#878787", textDecoration: "none" }}
                >
                  +91 63605 55872
                </a>
              </Typography>
            </Box>
          </Grid>

          {/* Email Box */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                py: 5,
                px: 5,
                minWidth: "100%",
                backgroundColor: "#f9f9f9",
                boxShadow: "0px 0px 10px 0px #00000040",
                borderRadius: "5px",
              }}
            >
              <MailOutline
                sx={{
                  height: "40px",
                  width: "40px",
                  color: "#878787",
                  mr: 2,
                }}
              />
              <Typography sx={{ color: "#878787", fontWeight: 600 }}>
                <a
                  href="mailto:reliflexmachinery@reliflex.in"
                  style={{ color: "#878787", textDecoration: "none" }}
                >
                  reliflexmachinery@reliflex.in
                </a>
                <br />
                <a
                  href="mailto:hello@reliflex.in"
                  style={{ color: "#878787", textDecoration: "none" }}
                >
                  hello@reliflex.in
                </a>
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Form and Map Section */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            width: "80%",
            gap: { xs: 3, md: 5 }, // Space between form and map
          }}
        >
          {/* Contact Form */}
          <Box
            sx={{
              backgroundColor: "#fff",
              boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              p: 3,
              width: { xs: "100%", md: "48%" },
            }}
          >
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: 500, fontSize: "20px", color: "#333", mb: 2 }}
              >
                Contact Form
              </Typography>
              {isSent && (
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: {
                      xl: "20px",
                      lg: "20px",
                      md: "16px",
                      xs: "12px",
                    },
                    textAlign: "center",
                    color: theme.palette.primary.main,
                  }}
                >
                  Thank you! Your message has been sent.
                </Typography>
              )}
              {/* Form Fields */}

              <Box
                sx={{
                  display: "flex",
                  mb: 2,
                  alignItems: "center",
                }}
              >
                <FormControl sx={{ m: 1, minWidth: "80%" }}>
                  <Typography sx={{ width: "150px", color: "#878787" }}>
                    Department:
                  </Typography>
                  <Select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                    <MenuItem value="sales">Sales</MenuItem>
                    <MenuItem value="support">Support</MenuItem>
                  </Select>
                  <Typography
                    sx={{ width: "150px", color: "#878787", mt: "20px" }}
                  >
                    Full Name:
                  </Typography>
                  <TextField
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    variant="outlined"
                    fullWidth
                    sx={{ color: "#333" }}
                  />
                  <Typography
                    sx={{ width: "150px", color: "#878787", mt: "20px" }}
                  >
                    Email:
                  </Typography>
                  <TextField
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    variant="outlined"
                    fullWidth
                    sx={{ color: "#333" }}
                  />
                  <Typography
                    sx={{ width: "150px", color: "#878787", mt: "20px" }}
                  >
                    Phone Number:
                  </Typography>
                  <TextField
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    sx={{ color: "#333" }}
                  />
                  <Typography
                    sx={{ width: "150px", color: "#878787", mt: "20px" }}
                  >
                    Subject:
                  </Typography>
                  <TextField
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    sx={{ color: "#333" }}
                  />
                </FormControl>
              </Box>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: "white",
                  height: { xs: "36px", sm: "40px", xxl: "48px" },
                  width: { xs: "100%", sm: "100%" },
                  mt: "40px",
                  mx: "auto",
                  ":hover": {
                    backgroundColor: theme.palette.primary.main,
                    opacity: "0.7",
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </Box>

          {/* Map Section */}
          <Box
            sx={{
              boxShadow: "0px 0px 10px 0px #00000040",
              borderRadius: "5px",
              p: 3,
              width: { xs: "100%", md: "48%" },
              backgroundColor: "#fff",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15562.545686000747!2d77.5978245!3d12.8020959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b27b52fb52d%3A0x83639eb4058d142e!2sReliflex%20Machinery%20%26%20Equipments!5e0!3m2!1sen!2sin!4v1717505369709!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default InquirePage;

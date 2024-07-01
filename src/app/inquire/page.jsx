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

const InquirePage = () => {
  const theme = useTheme();
  const [department, setDepartment] = useState("");
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));

  const handleChange = (event) => {
    setDepartment(event.target.value);
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
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit.
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
        }}
      >
        <Grid
          container
          gap={{ md: 6, sm: 2 }}
          sx={{
            width: { xxl: "70%", xl: "100%" },
            ml: { xxl: 0, xl: 28, lg: 18, md: 8, sm: 2 },
          }}
        >
          <Box
            item="true"
            xs={4}
            sx={[
              styles.boxShadow,
              {
                display: "flex",
                alignItems: "center",
                py: 2,
                px: 3,
                minWidth: { xl: "400px", lg: "300px", md: "250px" },
                mx: { xs: "auto", sm: 0 },
                mb: { xs: 3, sm: 0 },
              },
            ]}
          >
            <PlaceOutlined
              sx={[
                styles.color,
                {
                  height: { lg: "50px", md: "30px" },
                  width: { lg: "50px", md: "30px" },
                  mr: { lg: 3, md: 1, sm: 1.5, xs: 2 },
                },
              ]}
            />
            <Typography
              sx={[
                styles.color,
                {
                  fontWeight: 600,
                  width: { lg: "250px", md: "220px", sm: "200px", xs: "210px" },
                  fontSize: { sm: "12px", md: "16px" },
                },
              ]}
            >
              65, Shed 2A, Mantapa Bannerghatta Jigani Road, Banglore-560083,
              Karnatak, India.
            </Typography>
          </Box>
          <Box
            item="true"
            xs={4}
            sx={[
              styles.boxShadow,
              {
                display: "flex",
                alignItems: "center",
                py: 2,
                px: 3,
                minWidth: { xl: "400px", lg: "300px", md: "250px" },
                mx: { xs: "auto", sm: 0 },
                mb: { xs: 3, sm: 0 },
              },
            ]}
          >
            <PhonePausedOutlined
              sx={[
                styles.color,
                {
                  height: { lg: "50px", md: "30px" },
                  width: { lg: "50px", md: "30px" },
                  mr: { lg: 3, md: 1, sm: 1.5, xs: 2 },
                },
              ]}
            />
            <Typography
              sx={[
                styles.color,
                {
                  fontWeight: 600,
                  fontSize: { sm: "12px", md: "16px" },
                  width: { xs: "210px", sm: "auto" },
                },
              ]}
            >
              +91 99012 57700
              <br />
              +91 63605 55872
            </Typography>
          </Box>
          <Box
            item="true"
            xs={4}
            sx={[
              styles.boxShadow,
              {
                display: "flex",
                alignItems: "center",
                py: 2,
                px: 3,
                minWidth: { xl: "400px", lg: "300px" },
                mx: { xs: "auto", sm: 0 },
                mb: { xs: 3, sm: 0 },
              },
            ]}
          >
            <MailOutline
              sx={[
                styles.color,
                {
                  height: { lg: "50px", md: "30px" },
                  width: { lg: "50px", md: "30px" },
                  mr: { lg: 3, md: 1, sm: 1.5, xs: 2 },
                },
              ]}
            />
            <Typography
              sx={[
                styles.color,
                {
                  fontWeight: 600,
                  fontSize: { sm: "12px", md: "16px" },
                  width: { xs: "210px", sm: "auto" },
                },
              ]}
            >
              reliflexmachinery@reliflex.in
              <br />
              hello@reliflex.in
            </Typography>
          </Box>
        </Grid>
        <Box
          sx={{
            mx: "auto",
            width: { lg: "80%", md: "95%" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <Box
            sx={[
              styles.boxShadow,
              {
                p: 3,
                mt: 3,
                width: {
                  xs: "100%",
                  md: "48%",
                  xl: "45%",
                },
              },
            ]}
          >
            <Typography
              sx={{ fontWeight: 500, fontSize: { xs: "18px", sm: "20px" } }}
            >
              Contact Form
            </Typography>
            {[
              { label: "Department", type: "select" },
              { label: "Full Name", type: "text" },
              { label: "Contact Number", type: "text" },
              { label: "Email Address", type: "text" },
              { label: "Subject", type: "text" },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: { xs: "column", sm: "row" },
                  mb: 2,
                }}
              >
                <Typography
                  sx={[
                    styles.color,
                    {
                      width: { xs: "100%", sm: "150px", md: "118px" },
                      mb: { xs: 1, sm: 0 },
                    },
                  ]}
                >
                  {item.label}
                </Typography>
                <Typography
                  sx={[
                    styles.color,
                    {
                      fontWeight: 600,
                      fontSize: "20px",
                      display: { xs: "none", sm: "block" },
                    },
                  ]}
                >
                  :
                </Typography>
                <FormControl sx={{ m: 1, minWidth: { xs: "100%", sm: 300 } }}>
                  <InputLabel>{item.label}</InputLabel>
                  {item.type === "select" ? (
                    <Select value={department} onChange={handleChange}>
                      <MenuItem value="department1">Department 1</MenuItem>
                      <MenuItem value="department2">Department 2</MenuItem>
                      <MenuItem value="department3">Department 3</MenuItem>
                    </Select>
                  ) : (
                    <TextField variant="outlined" />
                  )}
                </FormControl>
              </Box>
            ))}
            <Box sx={{ display: "flex" }}>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  height: { xs: "36px", sm: "40px", xxl: "48px" },
                  width: { xs: "100%", sm: "174px" },
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
            </Box>
          </Box>

          <Box
            sx={[
              styles.boxShadow,
              {
                p: { sm: 3, xs: 1 },
                mt: 3,
                width: { xl: "45%", lg: "48%", md: "49%" },
              },
            ]}
          >
            <Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15562.545686000747!2d77.5978245!3d12.8020959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b27b52fb52d%3A0x83639eb4058d142e!2sReliflex%20Machinery%20%26%20Equipments!5e0!3m2!1sen!2sin!4v1717505369709!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default InquirePage;

"use client";
import {
  Box,
  Button,
  Divider,
  Input,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import React from "react";
import footerSectionImg from "../../../public/footer/footerSection.svg";
import LinkImg2 from "../../../public/recentNews/LinkImg2.svg";
import reliflexLogo from "../../../public/reliflex-logo.svg";
import blackBgDesign from "../../../public/footer/blackBgDesign.svg";
import Link from "next/link";

const Footer = () => {
  const theme = useTheme();
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  const FooterHeaderItem = ({ heading }) => {
    return (
      <Box>
        <Typography
          sx={{
            color: theme.palette.primary.main,
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: { md: "18px", sm: "14px" },
          }}
        >
          {heading}
        </Typography>
        <Divider
          sx={{
            borderColor: theme.palette.primary.main,
            borderBottomWidth: "3px",
            width: "55px",
            mb: 4,
          }}
        />
      </Box>
    );
  };
  const FooterItem = ({ text }) => {
    return (
      <Typography
        sx={{
          color: theme.palette.text.footer,
          fontWeight: 500,
          my: 3,
          fontSize: { md: "16px", sm: "13px" },
        }}
      >
        {text}
      </Typography>
    );
  };
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: {
            xxl: "176px",
            xl: "140px",
            lg: "115px",
            md: "94px",
            sm: "70px",
            xs: "150px",
          },
        }}
      >
        {screenSizeSm && (
          <Image src={footerSectionImg} alt="footer image" fill />
        )}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 175, 249, 0.8)",
          }}
        />

        <Box
          sx={{
            zIndex: 10,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-between" },
            alignItems: "center",
            p: { xs: 0.5, sm: 0 },
          }}
        >
          <Typography
            sx={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: { lg: "24px", xl: "30px" },
              textAlign: { xs: "center", sm: "left" },
              mb: { xs: 1, sm: 0 },
              mr: { xl: 12, lg: 2, md: 5, sm: 4 },
            }}
          >
            Subscribe for Weekly Newsletter
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
            }}
          >
            <TextField
              label="Enter Your Email Here"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: "25px",
                width: { xs: "100%", sm: "auto", lg: "400px", xl: "500px" },
                mb: { xs: 2, sm: 0 },
                mr: { xs: 0, sm: 5 },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
              }}
              InputLabelProps={{
                style: {
                  top: `-5px`,
                },
              }}
              inputProps={{
                style: {
                  height: "10px",
                },
              }}
            />
            <Button
              sx={{
                backgroundColor: "white",
                color: theme.palette.primary.main,
                fontWeight: 600,
                borderRadius: "25px",
                height: "40px",
                width: { xs: "100%", sm: "120px" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#181818",
          position: "relative",
          width: "100%",
          px: { xxl: 20, xl: 10, lg: 8, md: 2, sm: 2 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // zIndex: -1,
          }}
        >
          <Image
            src={blackBgDesign}
            alt="black bg design"
            fill
            priority
            style={{ position: "absolute" }}
          />

          <Box
            sx={{
              py: { md: 6, sm: 3 },
              display: "flex",
              flexDirection: { sm: "row", xs: "column" },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: { lg: "25%", md: "30%", sm: "31%" },
                mx: { xs: 2.5, sm: 0 },
              }}
            >
              <Link href="/">
                <Box sx={{ display: "flex" }}>
                  <Image
                    src={reliflexLogo}
                    alt="reliflex logo"
                    width={screenSizeXs && !screenSizeMd ? 120 : 200}
                    height={screenSizeXs && !screenSizeMd ? "auto" : 60}
                    style={{
                      margin: screenSizeXs && !screenSizeSm && "10px auto",
                    }}
                  />
                </Box>
              </Link>
              <Typography
                sx={{
                  color: theme.palette.text.footer,
                  fontWeight: 500,
                  mt: 3,
                  fontSize: { md: "16px", sm: "12px" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Reliflex Machinery & Equipments is a rapidly growing company involved in the design and manufacture of an extensive range of Machinery & Equipments for the building and construction industry.
              </Typography>
              <br />
              <Typography
                sx={{
                  color: theme.palette.text.footer,
                  fontWeight: 500,
                  fontSize: { md: "16px", sm: "12px" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                We started our business by importing these machineries from countries like Germany, Japan, China, Turkey, USA, Vietnam to name few in the year 2011.
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Button
                  sx={{
                    backgroundColor: "transparent",
                    border: `2px solid ${theme.palette.primary.main}`,
                    borderRadius: "4px",
                    textTransform: "uppercase",
                    color: theme.palette.text.footer,
                    fontWeight: 500,
                    mt: 3,
                    height: { sm: "48px", xs: "35px" },
                    px: { md: 4, sm: 2 },
                    fontSize: { md: "16px", sm: "12px", xs: "12px" },
                    mx: { xs: "auto", sm: 0 },
                  }}
                >
                  Get Connected
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "none" },
                flexDirection: "row",
                justifyContent: "space-between",
                mx: "auto",
                my: 3,
              }}
            >
              <Box sx={{ mr: 4 }}>
                <FooterHeaderItem heading="Useful Links" />
                <Link href="/">
                  <FooterItem text="Home" />
                </Link>
                <FooterItem text="Services" />
                <FooterItem text="Projects" />
                <FooterItem text="Blog" />
                <FooterItem text="Newsletter" />
                <FooterItem text="Contact Us" />
              </Box>
              <Box>
                <FooterHeaderItem heading="Services" />
                <FooterItem text="Service 1" />
                <FooterItem text="Service 2" />
                <FooterItem text="Service 3" />
                <FooterItem text="Service 4" />
                <FooterItem text="Service 5" />
                <FooterItem text="Service 6" />
              </Box>
            </Box>
            <Box sx={{ display: { sm: "block", xs: "none" } }}>
              <FooterHeaderItem heading="Useful Links" />
              <FooterItem text="Home" />
              <FooterItem text="Services" />
              <FooterItem text="Projects" />
              <FooterItem text="Blog" />
              <FooterItem text="Newsletter" />
              <FooterItem text="Contact Us" />
            </Box>
            <Box sx={{ display: { sm: "block", xs: "none" } }}>
              <FooterHeaderItem heading="Services" />
              <FooterItem text="Service 1" />
              <FooterItem text="Service 2" />
              <FooterItem text="Service 3" />
              <FooterItem text="Service 4" />
              <FooterItem text="Service 5" />
              <FooterItem text="Service 6" />
            </Box>
            <Box
              sx={{
                width: {
                  xxl: "18%",
                  xl: "22%",
                  lg: "24%",
                  sm: "26%",
                },
                mx: { xs: 2, sm: 0 },
                display: { xs: "flex", sm: "block" },
                flexDirection: { xs: "column" },
              }}
            >
              <Box sx={{ mx: { xs: "auto", sm: 0 } }}>
                <FooterHeaderItem heading="Contact Us" />
              </Box>
              <Typography
                sx={{
                  color: theme.palette.text.footer,
                  fontWeight: 500,
                  mb: 3,
                  fontSize: { md: "16px", sm: "12px" },
                }}
              >
                65, Shed 2A, Mantapa Bannerghatta Jigani Road, Banglore-560083,
                Karnatak, India.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.footer,
                  fontWeight: 500,
                  mb: 2,
                  fontSize: { md: "16px", sm: "12px" },
                  mx: { xs: "auto", sm: 0 },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    fontSize: { md: "16px", sm: "12px" },
                  }}
                >
                  Customer Support l:
                </Typography>{" "}
                +91 80299 00993
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.footer,
                  fontWeight: 500,
                  fontSize: { md: "16px", sm: "12px" },
                  mx: { xs: "auto", sm: 0 },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    fontSize: { md: "16px", sm: "12px" },
                  }}
                >
                  Contact:
                </Typography>{" "}
                <a href="tel:+919901257700">+91 99012 57700</a>
              </Typography>
              <Typography
                sx={{
                  ml: 8,
                  mb: 2,
                  color: theme.palette.text.footer,
                  fontWeight: 500,
                  fontSize: { md: "16px", sm: "12px" },
                  mx: { xs: "auto", sm: 0 },
                }}
              >
                +91 63605 55872
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.footer,
                  fontWeight: 500,
                  fontSize: { md: "16px", sm: "12px" },
                  mx: { xs: "auto", sm: 0 },
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 500,
                    fontSize: { md: "16px", sm: "12px" },
                  }}
                >
                  Email:{" "}
                </Typography>{" "}
                reliflexmachinery@reliflex.in
              </Typography>
              <Typography
                sx={{
                  ml: 6,
                  mb: 2,
                  color: theme.palette.text.footer,
                  fontWeight: 500,
                  fontSize: { md: "16px", sm: "12px" },
                  mx: { xs: "auto", sm: 0 },
                }}
              >
                hello@reliflex.in
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pb: 1 }}>
          <Divider
            sx={{
              borderColor: theme.palette.primary.main,
              borderBottomWidth: "2px",
              width: "46%",
            }}
          />
          <Button
            sx={{
              backgroundColor: "transparent",
              color: theme.palette.text.footer,
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: { xl: "3px", lg: "1px" },
              px: 2,
              border: `2px solid ${theme.palette.primary.main}`,
              fontSize: { md: "16px", xs: "12px" },
            }}
          >
            Reliflex
          </Button>
          <Divider
            sx={{
              borderColor: theme.palette.primary.main,
              borderBottomWidth: "2px",
              width: "46%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            pb: 4,
          }}
        >
          <Typography
            sx={{
              color: theme.palette.text.footer,
              fontWeight: 400,
              fontSize: { xs: "12px", sm: "16px" },
              mx: { xs: "auto", sm: 0 },
            }}
          >
            @ Copyright 2024 Reliflex. All Rights Reserved.{" "}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.text.footer,
              fontSize: { xs: "12px", sm: "16px" },
              mx: { xs: "auto", sm: 0 },
            }}
          >
            Powered by{" "}
            <Typography
              component="span"
              sx={{
                color: theme.palette.primary.main,
                fontSize: { xs: "12px", sm: "16px" },
              }}
            >
              Reliflex
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

"use client";
import { useTheme } from "@emotion/react";
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import allSectionsHero from "../../../public/allSectionsHero.svg";
import redMachine from "../../../public/ourServices/redMachine.svg";
import faq1 from "../../../public/faq/faq1.svg";
import faq2 from "../../../public/faq/faq2.svg";
import FAQPageContent from "../components/FAQPageContent";

const FAQPage = () => {
  const theme = useTheme();
  const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
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
        sm: "2rem",
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
          <Typography sx={styles.heading}>FAQ&apos;s</Typography>
          <Typography sx={[styles.subHeading, { color: "white" }]}>
            <Typography
              component="span"
              sx={[{ color: "#646776" }, styles.subHeading]}
            >
              Home &nbsp;&nbsp;/&nbsp;&nbsp; Company &nbsp;&nbsp;/&nbsp;&nbsp;{" "}
            </Typography>
            FAQ
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
            FREQUNTLY ASKED
          </Typography>
          {"  "}
          QUESTIONS
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: { md: -20, sm: -10, xs: 2 },
          mr: 2,
          mb: { xs: 4, sm: 0 },
        }}
      >
        <Image
          src={redMachine}
          alt="red machine"
          style={{
            width:
              screenSizeXs && !screenSizeMd
                ? "150px"
                : screenSizeMd && !screenSizeLg
                ? "200px"
                : screenSizeLg && !screenSizeXl
                ? "250px"
                : "auto",
            height: "auto",
          }}
        />
      </Box>
      <Box
        sx={{
          mx: { xl: 20, lg: 10, md: 8, sm: 5 },
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mx: { xs: "auto", sm: 0 },
          }}
        >
          <Image
            src={faq2}
            alt="faq2"
            width={450}
            height="auto"
            style={{
              width:
                screenSizeXs && !screenSizeMd
                  ? "270px"
                  : screenSizeMd && !screenSizeLg
                  ? "300px"
                  : screenSizeLg && !screenSizeXl
                  ? "350px"
                  : "450px",
              height: "auto",
            }}
          />
          <Image
            src={faq1}
            alt="faq1"
            width={400}
            height="auto"
            style={{
              marginTop: "-100px",
              marginLeft: "-40px",
              width:
                screenSizeXs && !screenSizeMd
                  ? "220px"
                  : screenSizeMd && !screenSizeLg
                  ? "250px"
                  : screenSizeLg && !screenSizeXl
                  ? "300px"
                  : "400px",
              height: "auto",
            }}
          />
        </Box>
        <Box sx={{ width: { sm: "50%", xs: "100%" }, mt: { sm: 0, xs: 5 } }}>
          <FAQPageContent />
        </Box>
      </Box>
    </Box>
  );
};
export default FAQPage;

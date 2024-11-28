"use client";
import { useTheme } from "@emotion/react";
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import allSectionsHero from "../../../public/allSectionsHero.svg";
import leftRedMachine from "../../../public/featuredProducts/leftRedMachine.svg";
import redMachine from "../../../public/ourServices/redMachine.svg";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import dotsGrid from "../../../public/dot.svg";
import PastEvents from "../components/Events/PastEvents";

const EventsPage = () => {
  const theme = useTheme();
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
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
          <Typography sx={styles.heading}>Event&apos;s</Typography>
          <Typography sx={[styles.subHeading, { color: "white" }]}>
            <Typography
              component="span"
              sx={[{ color: "#646776" }, styles.subHeading]}
            >
              Home &nbsp;&nbsp;/&nbsp;&nbsp; Media &nbsp;&nbsp;/&nbsp;&nbsp;{" "}
            </Typography>
            Events
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
            UPCOMING
          </Typography>
          {"  "}
          EVENTS
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
            mb: { xs: 3, sm: 0 },
          }}
        >
          Stay tuned for our upcoming events, where we showcase the latest trends and innovations in the construction industry.
        </Typography>
      </Box>
      {screenSizeMd && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mt: -25,
            mr: 2,
            ml: { lg: 0, md: -4 },
          }}
        >
          <Image src={leftRedMachine} alt="red machine" />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          mt: { sm: 5, md: 0 },
        }}
      >
        <UpcomingEvents />
      </Box>
      {screenSizeSm && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: -20,
            mr: { xxl: 12 },
          }}
        >
          <Image
            src={redMachine}
            alt="red machine"
            style={{
              width: screenSizeSm && !screenSizeMd && 150,
              height: "auto",
            }}
          />
        </Box>
      )}
      {screenSizeSm && (
        <Box sx={{ ml: "-90px", mt: { md: "-80px", sm: "-20px" } }}>
          <Image
            src={dotsGrid}
            alt="dot"
            style={{
              width: screenSizeSm && !screenSizeMd && 250,
              height: "auto",
            }}
          />
        </Box>
      )}

      <Box sx={{ mt: { lg: -30, sm: -10, xs: 10 }, pb: 10 }}>
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
            PAST
          </Typography>
          {"  "}
          EVENTS
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
          width: "100%",
        }}
      >
        <PastEvents />
      </Box>
    </Box>
  );
};
export default EventsPage;

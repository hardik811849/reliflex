"use client";
import { useTheme } from "@emotion/react";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import allSectionsHero from "../../../public/allSectionsHero.svg";
import yellowBulldozer from "../../../public/manufacturing/yellowBulldozer.svg";
import dotsGrid from "../../../public/dot.svg";
import EquipmentsStarterPage from "../components/Equipments/EquipmentsStarterPage";
import EquipmentSidebar from "../components/Equipments/EquipmentSidebar";
import { useState } from "react";
import { BarBenderModelGWH32 } from "../components/Equipments/all-equipments/bar-bender-series/BarBenderModelGWH32";

const EquipmentPage = () => {
  const theme = useTheme();
  const [demoSelectModel, setDemoSelectModel] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
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
          <Typography sx={styles.heading}>Our Equipments</Typography>
          <Typography sx={[styles.subHeading, { color: "white" }]}>
            <Typography
              component="span"
              sx={[{ color: "#646776" }, styles.subHeading]}
            >
              Home &nbsp;&nbsp;/&nbsp;&nbsp;
            </Typography>
            Equipment
          </Typography>
        </Box>
      </Box>
      {!demoSelectModel && (
        <Box>
          {screenSizeSm && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                mt: -5,
                ml: { xxl: -10, xl: -20, lg: -25, md: -26, sm: -20 },
              }}
            >
              <Image
                src={dotsGrid}
                alt="dots grid"
                style={{
                  width: screenSizeSm && !screenSizeMd ? "300px" : "auto",
                  height: "auto",
                }}
              />
            </Box>
          )}
          <Box sx={{ mt: { sm: -20, xs: 10 } }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
                textAlign: "center",
                color: theme.palette.text.main,
              }}
            >
              OUR{" "}
              <Typography
                component="span"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
                }}
              >
                EQUIPMENT'S
              </Typography>
              {"  "}
              BY CATEGORIES
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
              We provide reliable, heavy-duty equipment designed to meet the toughest construction challenges.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              mt: { md: -20, sm: -10 },
              mr: { xl: 2, lg: -4, md: -10 },
              transform: "rotateY(180deg)",
            }}
          >
            <Image
              src={yellowBulldozer}
              alt="yellow bulldozer"
              style={{
                width:
                  screenSizeXs && !screenSizeSm
                    ? "200px"
                    : screenSizeSm && !screenSizeMd
                      ? "300px"
                      : 450,
                height: "auto",
              }}
            />
          </Box>
        </Box>
      )}
      <Grid

        container
        width={{ sm: "90%", xs: "100%", md: "100%" }}
        sx={{ display: "flex", mx: "auto" }}
        spacing={2}
      >
        <Grid item xs={12} sm={5} md={3} lg={2}>
          <EquipmentSidebar
            demoSelectModel={demoSelectModel}
            setSelectedCategory={setSelectedCategory}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={9} lg={10}
        >
          <EquipmentsStarterPage
            demoSelectModel={demoSelectModel}
            setDemoSelectModel={setDemoSelectModel}
            selectedCategory={selectedCategory}
          />
        </Grid>
      </Grid>
    </Box >
  );
};
export default EquipmentPage;

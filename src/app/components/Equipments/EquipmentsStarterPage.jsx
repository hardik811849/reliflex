"use client";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import equipment1 from "../../../../public/equipments/equipment1.svg";
import Image from "next/image";
import { NavigateNext } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const EquipmentsStarterPage = () => {
  const theme = useTheme();
  const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  const EquipmentCard = ({ imgSrc, imgAlt, equipmentName }) => {
    return (
      <Box
        item="true"
        xs={4}
        sx={{
          borderRadius: "10px",
          boxShadow: "0px 4px 10px 0px #00000026",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          mb: { xs: 2, sm: 0 },
        }}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            width:
              screenSizeXs && !screenSizeMd
                ? "168px"
                : screenSizeMd && !screenSizeLg
                ? "200px"
                : screenSizeLg && !screenSizeXl
                ? "250px"
                : "auto",
            height: "auto",
          }}
        />
        <Typography
          sx={{
            position: "absolute",
            bottom: 65,
            left: 10,
            fontWeight: 500,
            fontSize: "18px",
            color: "white",
          }}
        >
          {equipmentName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontWeight: 500,
              fontSize: { md: "18px", xs: "14px" },
              mr: { sm: 1, md: 0 },
            }}
          >
            Explore More
          </Typography>
          <NavigateNext
            sx={{
              border: "1.5px solid #000",
              borderRadius: "50%",
              ":hover": { cursor: "pointer" },
            }}
          />
        </Box>
      </Box>
    );
  };
  const allEquipmentsData = [
    {
      id: 1,
      imgSrc: equipment1,
      imgAlt: "equipment1",
      equipmentName: "GW20S",
    },
    {
      id: 2,
      imgSrc: equipment1,
      imgAlt: "equipment1",
      equipmentName: "GW20",
    },
    {
      id: 3,
      imgSrc: equipment1,
      imgAlt: "equipment1",
      equipmentName: "GW20D",
    },
    {
      id: 4,
      imgSrc: equipment1,
      imgAlt: "equipment1",
      equipmentName: "GF26",
    },
    {
      id: 5,
      imgSrc: equipment1,
      imgAlt: "equipment1",
      equipmentName: "GWH32",
    },
    {
      id: 6,
      imgSrc: equipment1,
      imgAlt: "equipment1",
      equipmentName: "GWH36",
    },
    {
      id: 7,
      imgSrc: equipment1,
      imgAlt: "equipment1",
      equipmentName: "GW40",
    },
    {
      id: 8,
      imgSrc: equipment1,
      imgAlt: "equipment1",
      equipmentName: "GW42J",
    },
    {
      id: 9,
      imgSrc: equipment1,
      imgAlt: "equipment1",
      equipmentName: "GW42R",
    },
    {
      id: 10,
      imgSrc: equipment1,
      imgAlt: "equipment1",
      equipmentName: "GW42D",
    },
    {
      id: 11,
      imgSrc: equipment1,
      imgAlt: "equipment1",
      equipmentName: "GW50",
    },
  ];
  return (
    <Grid
      container
      gap={{ xxl: 6, xl: 3, lg: 3, md: 2, sm: 3 }}
      sx={{
        ml: {
          xxl: 50,
          xl: 16,
          lg: 15,
          md: 12,
          sm: 12,
          xs: -20,
        },
        mt: 10,
      }}
      width={{ xl: "calc(100% - 240px)", lg: "100%", sm: "90%", xs: "100%" }}
    >
      {allEquipmentsData?.map((item) => {
        return (
          <EquipmentCard
            key={item.id}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            equipmentName={item.equipmentName}
          />
        );
      })}
    </Grid>
  );
};

export default EquipmentsStarterPage;

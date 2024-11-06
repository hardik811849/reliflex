"use client";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import equipment1 from "../../../../public/equipments/equipment1.svg";
import Image from "next/image";
import { NavigateNext } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import EquipmentSidebar from "./EquipmentSidebar";

const EquipmentsStarterPage = ({ selectedCategory }) => {

  const EquipmentCard = ({ imgSrc, imgAlt, equipmentName }) => {
    const theme = useTheme();
    const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
    const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
    const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
    const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
    const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px 0px #00000026",
          mb: { xs: 2, sm: 4 },
          p: 2,
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              width: "100%",
              height: "auto",
            }}
          />
          <Typography
            sx={{
              position: "absolute",
              bottom: 16,
              left: 16,
              fontWeight: 500,
              fontSize: "18px",
              color: "white",
              textShadow: "0px 4px 6px rgba(0,0,0,0.5)",
            }}
          >
            {equipmentName}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              color: "black",
              fontWeight: 500,
              fontSize: { md: "18px", xs: "14px" },
            }}
          >
            Explore More
          </Typography>
          <NavigateNext
            sx={{
              border: "1.5px solid #000",
              color: "black",
              borderRadius: "50%",
              ":hover": { cursor: "pointer" },
            }}
          />
        </Box>
      </Grid>
    );
  };

  const defaultEquipmentsData = [
    { id: 1, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW20S", category: "bar bender" },
    { id: 2, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW20", category: "bar bender" },
    { id: 3, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW20D", category: "bar bender" },
    { id: 4, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GF26", category: "bar bender" },
    { id: 5, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GWH32", category: "bar bender" },
    { id: 6, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GWH36", category: "bar bender" },
    { id: 7, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW40", category: "bar bender" },
    { id: 8, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW42J", category: "bar bender" },
    { id: 9, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW42R", category: "bar bender" },
    { id: 10, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW42D", category: "bar bender" },
    { id: 11, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW50", category: "bar bender" },
  ];

  // Sample equipment data with category field added
  const allEquipmentsData = [
    { id: 1, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW20S", category: "bar bender" },
    { id: 2, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW20", category: "bar bender" },
    { id: 3, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW20D", category: "bar bender" },
    { id: 4, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GF26", category: "bar bender" },
    { id: 5, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GWH32", category: "bar bender" },
    { id: 6, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GWH36", category: "bar bender" },
    { id: 7, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW40", category: "bar bender" },
    { id: 8, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW42J", category: "bar bender" },
    { id: 9, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW42R", category: "bar bender" },
    { id: 10, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW42D", category: "bar bender" },
    { id: 11, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GW50", category: "bar bender" },
    { id: 12, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GQ40", category: "bar cutter" },
    { id: 13, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GQ42", category: "bar cutter" },
    { id: 14, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GQ50", category: "bar cutter" },
    { id: 15, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "RB16", category: "portable bar bender" },
    { id: 16, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "RB25", category: "portable bar bender" },
    { id: 17, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "RB32", category: "portable bar bender" },
    { id: 18, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "HRB32", category: "portable bar bender" },
    { id: 19, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "RC16", category: "portable bar cutter" },
    { id: 20, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "RC20", category: "portable bar cutter" },
    { id: 21, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "RC25", category: "portable bar cutter" },
    { id: 22, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "RB32", category: "portable bar cutter" },
    { id: 23, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "NRT-25", category: "portable machine" },
    { id: 24, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "NRT-40", category: "portable machine" },
    { id: 25, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "RCT36", category: "portable machine" },
    { id: 26, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "RCT42", category: "portable machine" },
    { id: 27, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "RFC-40", category: "portable machine" },
    { id: 28, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "CDRG-45R", category: "bar threading machine" },
    { id: 29, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "CDRG-40R", category: "bar threading machine" },
    { id: 30, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "HGS40R", category: "bar threading machine" },
    { id: 31, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "HGS50R", category: "bar threading machine" },
    { id: 32, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "RGX14", category: "scraper straightening machine" },
    { id: 33, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "RGX25", category: "scraper straightening machine" },

    { id: 34, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GT4-14A", category: "decoil machine" },
    { id: 35, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GT4-14B", category: "decoil machine" },
    { id: 36, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GT4-14C", category: "decoil machine" },
    { id: 37, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GT4-14D", category: "decoil machine" },
    { id: 38, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GT4-14E", category: "decoil machine" },
    { id: 39, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GT4-10", category: "decoil machine" },
    { id: 40, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GT4-12", category: "decoil machine" },
    { id: 41, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-10", category: "decoil machine" },
    { id: 42, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "decoil machine" },
    { id: 43, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "punching shearing machine" },
    { id: 44, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "punching shearing machine" },
    { id: 45, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "punching shearing machine" },
    { id: 46, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "power trowels/ power floater" },
    { id: 47, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "power trowels/ power floater" },
    { id: 48, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "power trowels/ power floater" },
    { id: 49, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "power trowels/ power floater" },
    { id: 50, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "power trowels/ power floater" },
    { id: 51, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "power trowels/ power floater" },


    { id: 52, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "ride on trowel" },
    { id: 53, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "ride on trowel" },
    { id: 54, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "ride on trowel" },
    { id: 55, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "concrete cutter / groove cutter" },
    { id: 56, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "concrete cutter / groove cutter" },
    { id: 57, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "concrete cutter / groove cutter" },
    { id: 58, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "concrete cutter / groove cutter" },
    { id: 59, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "concrete cutter / groove cutter" },
    { id: 60, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "concrete cutter / groove cutter" },
    { id: 61, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "concrete cutter / groove cutter" },
    { id: 62, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "concrete cutter / groove cutter" },
    { id: 63, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "concrete cutter / groove cutter" },
    { id: 64, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "vibrator screed" },
    { id: 65, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "vibrator screed" },
    { id: 66, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "vibrator screed" },
    { id: 67, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "vibrator screed" },
    { id: 68, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "vibrator screed" },
    { id: 69, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "concrete vibratory paver" },
    { id: 70, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "concrete vibratory paver" },
    { id: 71, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "truss screed" },
    { id: 72, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "truss screed" },
    { id: 73, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "plate compactor" },
    { id: 74, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "plate compactor" },
    { id: 75, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "plate compactor" },
    { id: 76, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "plate compactor" },
    { id: 77, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "plate compactor" },
    { id: 78, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "tamping rammer" },
    { id: 79, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "tamping rammer" },
    { id: 80, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "tamping rammer" },
    { id: 81, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "tamping rammer" },
    { id: 82, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "tamping rammer" },
    { id: 83, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "vibratorry road roller" },
    { id: 84, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "vibratorry road roller" },
    { id: 85, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "vibratorry road roller" },
    { id: 86, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "vibratorry road roller" },
    { id: 87, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "vibratorry road roller" },
    
    { id: 88, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "laser screed" },
    { id: 89, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "laser screed" },
    { id: 90, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "laser screed" },
    
    { id: 91, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "grinding polishing machine" },
    { id: 92, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "grinding polishing machine" },
    { id: 93, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "milling / scarifying machine" },
    { id: 94, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "road marking machine" },
    { id: 95, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "suspended platform" },
    { id: 96, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "suspended platform" },
    { id: 97, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "stand tyre mixer" },
    { id: 98, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "stand tyre mixer" },
    { id: 99, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "stand tyre mixer" },
    { id: 100, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "stand tyre mixer" },
    { id: 101, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "trolley mixer" },
    { id: 102, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "trolley mixer" },
    { id: 103, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "trolley mixer" },
    { id: 104, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "trolley mixer" },
    { id: 105, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "shotcrete pump" },
    { id: 106, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "concrete spraying machine" },
    { id: 107, imgSrc: equipment1, imgAlt: "equipment1", equipmentName: "GTW4-12", category: "flooring equipment" },


  ];

  // console.log(EquipmentSidebar.summaries)

  // Filter equipment data based on selectedCategory
  const filteredEquipments = selectedCategory
    ? allEquipmentsData.filter(item => item.category === selectedCategory)
    : defaultEquipmentsData; // Show all if no category is selected


  return (
    <Grid
      container
      spacing={2}
      sx={{
        gap: 5,
        padding: { xs: 2, sm: 3, md: 3 },
        mt: 5,
        ml: {
          sm: 0,
          md: 16,
          lg: 20,
          xl: 21,
          xxl: 24,
        },
      }}
    >
      {filteredEquipments.length > 0 ? (
        filteredEquipments.map((item) => (
          <EquipmentCard
            key={item.id}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            equipmentName={item.equipmentName}
          />
        ))
      ) : (
        <Typography>No products available for this category.</Typography> // Message if no products found
      )}
    </Grid>
  );
};

export default EquipmentsStarterPage;

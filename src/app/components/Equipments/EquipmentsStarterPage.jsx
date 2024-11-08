"use client";
import { Box, Grid, Typography, GridItem, useMediaQuery, Button } from "@mui/material";
import Image from "next/image";
import { NavigateNext } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { products } from "./product";
import EquipmentSidebar from "./EquipmentSidebar";

const EquipmentsStarterPage = ({ selectedCategory }) => {

  const [exploremore, setExploremore] = useState(null); // null instead of "" for clarity
  const [exploremoreid, setExploremoreid] = useState(null); // null instead of "" for clarity

  // Reset the exploremore state when selectedCategory changes (i.e., when navigating between categories)
  useEffect(() => {
    setExploremore(null); // Reset exploremore when category changes
    setExploremoreid(null); // Reset exploremoreid when category changes
  }, [selectedCategory]);

  const handleExploreMoreClick = (value, id) => {
    setExploremore(value); // Setting the value to 1 or 0
    setExploremoreid(id); // Setting the id of the selected item
  };

  // This is the CardDetail component placed inside the same file


  if (exploremore === 1 && exploremoreid) {


    const tempProductArray = [];

    // Iterate through all categories and assign category IDs (index starting from 1)
    Object.keys(products).forEach((category, categoryIndex) => {
      products[category].forEach((product) => {
        tempProductArray.push({
          id: product.id,
          categoryId: categoryIndex + 1,
          categoryName: category,
          image: product.image,
          Model: product.Model,
          Input_Voltage: product.Input_Voltage,
          Diameter_Round_Bar: product.Diameter_Round_Bar,
          Diameter_Threaded_Steel: product.Diameter_Threaded_Steel,
          Diameter_of_WorkingDisc: product.Diameter_of_WorkingDisc,
          Adjustable_Bending_Speed: product.Adjustable_Bending_Speed,
          Working_Type: product.Working_Type,
          Motor_Power_Voltage: product.Motor_Power_Voltage,
          Motor_RPM: product.Motor_RPM,
          Pedals: product.Pedals,
          Dimensions: product.Dimensions,
          Weight: product.Weight,
        });
      });
    });

    const filteredEquipments = tempProductArray.filter(item => item.id === exploremoreid);
    
    return (
      <Grid container>
        {filteredEquipments.map((item, index) => (
          <Box p={5} maxW="900px" mx="auto" bg="white" boxShadow="md" borderRadius="md">
          {/* Machine Image */}
          <Box display="flex" justifyContent="center" mb={5}>
            <Image
              src={item.image}
              alt={item.Model}
              width={500}
              height={300}
              layout="responsive"
              style={{
                border: "2px solid",
                borderColor: "blue.300",
                borderRadius: "md",
              }}
            />
          </Box>

          {/* Specifications Grid */}
          <Grid templateColumns="repeat(2, 1fr)" gap={4} bg="gray.100" p={5} borderRadius="md">
            {/* Specification Items */}
            <GridItem>
              <Typography fontWeight="bold">Model:</Typography>
              <Typography>GWH32</Typography>
            </GridItem>

            <GridItem>
              <Typography fontWeight="bold">Working Type:</Typography>
              <Typography>Automatic / Manual</Typography>
            </GridItem>

            <GridItem>
              <Typography fontWeight="bold">Input Voltage (Phase / Current):</Typography>
              <Typography>Three Phase 50-60 Hz</Typography>
            </GridItem>

            <GridItem>
              <Typography fontWeight="bold">Motor Power:</Typography>
              <Typography>3.5 kW / 415 V / 380 V</Typography>
            </GridItem>

            <GridItem>
              <Typography fontWeight="bold">Diameter (Round Bar):</Typography>
              <Typography>16-32 mm</Typography>
            </GridItem>

            <GridItem>
              <Typography fontWeight="bold">Motor RPM:</Typography>
              <Typography>1440 / min</Typography>
            </GridItem>

            <GridItem>
              <Typography fontWeight="bold">Diameter (Threaded Steel):</Typography>
              <Typography>16-32 mm</Typography>
            </GridItem>

            <GridItem>
              <Typography fontWeight="bold">Pedals:</Typography>
              <Typography>2 No</Typography>
            </GridItem>

            <GridItem>
              <Typography fontWeight="bold">Diameter of Working Disc:</Typography>
              <Typography>360 mm</Typography>
            </GridItem>

            <GridItem>
              <Typography fontWeight="bold">Dimensions:</Typography>
              <Typography>850*850*1000 mm</Typography>
            </GridItem>

            <GridItem>
              <Typography fontWeight="bold">Adjustable Bending Speed:</Typography>
              <Typography>10-20 R/min</Typography>
            </GridItem>

            <GridItem>
              <Typography fontWeight="bold">Weight:</Typography>
              <Typography>320 kgs</Typography>
            </GridItem>
          </Grid>

          {/* Download Button */}
          <Box textAlign="center" mt={5}>
            <Button colorScheme="blue" size="md">
              Download Brochure
            </Button>
          </Box>
        </Box>
        ))}
      </Grid>
    );
  } else {

    const tempProductArray = [];

    // Iterate through all categories and assign category IDs (index starting from 1)
    Object.keys(products).forEach((category, categoryIndex) => {
      products[category].forEach((product) => {
        tempProductArray.push({
          id: product.id,
          categoryId: categoryIndex + 1,
          categoryName: category,
          image: product.image,
          Model: product.Model,
          Input_Voltage: product.Input_Voltage,
          Diameter_Round_Bar: product.Diameter_Round_Bar,
          Diameter_Threaded_Steel: product.Diameter_Threaded_Steel,
          Diameter_of_WorkingDisc: product.Diameter_of_WorkingDisc,
          Adjustable_Bending_Speed: product.Adjustable_Bending_Speed,
          Working_Type: product.Working_Type,
          Motor_Power_Voltage: product.Motor_Power_Voltage,
          Motor_RPM: product.Motor_RPM,
          Pedals: product.Pedals,
          Dimensions: product.Dimensions,
          Weight: product.Weight,
        });
      });
    });

    // Filter products based on selectedCategory
    const filteredEquipments = selectedCategory
      ? tempProductArray.filter(item => item.categoryName === selectedCategory)
      : tempProductArray.filter(item => item.categoryId === 1);

    return (
      <Box>
        <Grid container spacing={3}
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
          }}>
          {filteredEquipments.map((item, index) => (
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
              <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
                <Image
                  src={item.image}
                  alt={item.Model}
                  layout="responsive"
                  width={500}
                  height={300}
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    objectFit: "contain",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>
    
              <Typography
                sx={{
                  mt: 2,
                  fontWeight: 500,
                  fontSize: "18px",
                  textAlign: "center",
                  color: "black",
                }}
              >
                {item.equipmentName}
              </Typography>
    
              <Box
                onClick={() => handleExploreMoreClick(1, item.id)}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                  cursor: "pointer",
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
          ))}
        </Grid>
      </Box>
    );
  }
};

export default EquipmentsStarterPage;

// key={`${item.id}-${index}`}
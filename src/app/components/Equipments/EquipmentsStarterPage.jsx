"use client";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { NavigateNext } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { products } from "./product";
import EquipmentSidebar from "./EquipmentSidebar";

const EquipmentsStarterPage = ({ selectedCategory }) => {


  const exploremore = "";

  if (exploremore != "") {

   


    const tempProductArray = [];

    // Iterate through all categories and assign category IDs (index starting from 1)
    Object.keys(products).forEach((category, categoryIndex) => {
      // Iterate through each product in a category
      products[category].forEach((product) => {
        // Push all product details along with the categoryId (categoryIndex + 1) to tempProductArray
        tempProductArray.push({
          id: product.id,
          categoryId: categoryIndex + 1, // Adding categoryId as per index (1, 2, 3, ...)
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


    // Filter equipment data based on selectedCategory
    const filteredEquipments = selectedCategory
      ? tempProductArray.filter(item => item.categoryName === selectedCategory)
      : tempProductArray.filter(item => item.categoryId === 1); // Display products from the first category


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
              imgSrc={item.image}
              imgAlt={item.imgAlt}
              equipmentName={item.Model}
            />
          ))
        ) : (
          <Typography>No products available for this category.</Typography> // Message if no products found
        )}
      </Grid>


    );

  } else {

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




          {/* Image section */}
          <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
            <Image
              src={imgSrc}
              alt={imgAlt}
              layout="responsive" // Responsive behavior
              width={500} // Set width for consistent image size
              height={300} // Set height for consistent image size
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                objectFit: "contain", // Contain the image within the box without overflowing
                maxWidth: "100%", // Ensure the image doesn't overflow horizontally
                maxHeight: "100%", // Ensure the image doesn't overflow vertically
              }}
            />
          </Box>

          {/* Equipment name */}
          <Typography
            sx={{
              mt: 2, // Margin top for spacing below the image
              fontWeight: 500,
              fontSize: "18px",
              textAlign: "center", // Center the equipment name
              color: "black",
            }}
          >
            {equipmentName}
          </Typography>

          {/* Explore more section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2, // Margin top for spacing below the equipment name
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


    const tempProductArray = [];

    // Iterate through all categories and assign category IDs (index starting from 1)
    Object.keys(products).forEach((category, categoryIndex) => {
      // Iterate through each product in a category
      products[category].forEach((product) => {
        // Push all product details along with the categoryId (categoryIndex + 1) to tempProductArray
        tempProductArray.push({
          id: product.id,
          categoryId: categoryIndex + 1, // Adding categoryId as per index (1, 2, 3, ...)
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


    // Filter equipment data based on selectedCategory
    const filteredEquipments = selectedCategory
      ? tempProductArray.filter(item => item.categoryName === selectedCategory)
      : tempProductArray.filter(item => item.categoryId === 1); // Display products from the first category


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
              imgSrc={item.image}
              imgAlt={item.imgAlt}
              equipmentName={item.Model}
            />
          ))
        ) : (
          <Typography>No products available for this category.</Typography> // Message if no products found
        )}
      </Grid>


    );
  }
};

export default EquipmentsStarterPage;

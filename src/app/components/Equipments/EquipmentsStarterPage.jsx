"use client";
import {
  Box,
  Grid,
  Typography,
  GridItem,
  useMediaQuery,
  Button,
} from "@mui/material";
import Image from "next/image";
import { NavigateNext } from "@mui/icons-material";
import DownloadIcon from "@mui/icons-material/Download";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { products } from "./product";
import EquipmentSidebar from "./EquipmentSidebar";
import Link from "next/link";

const EquipmentsStarterPage = ({ selectedCategory }) => {
  const [exploremore, setExploremore] = useState(null); // null instead of "" for clarity
  const [exploremoreid, setExploremoreid] = useState(null); // null instead of "" for clarity
  const [catid, setcatid] = useState(null);

  // Reset the exploremore state when selectedCategory changes (i.e., when navigating between categories)
  useEffect(() => {
    setExploremore(null); // Reset exploremore when category changes
    setExploremoreid(null); // Reset exploremoreid when category changes
  }, [selectedCategory]);

  const handleExploreMoreClick = (value, id, cid) => {
    setExploremore(value); // Setting the value to 1 or 0
    setExploremoreid(id); // Setting the id of the selected item
    setcatid(cid);
  };

  // This is the CardDetail component placed inside the same file

  if (exploremore === 1 && exploremoreid) {
    const tempProductArray = [];

    // Iterate through all categories and assign category IDs (index starting from 1)
    Object.keys(products).forEach((category) => {
      products[category].forEach((product) => {
        if (product.categoryId == catid && product.id == exploremoreid) {
          tempProductArray.push({
            id: product.id,
            categoryId: product.categoryId,
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
        }
      });
    });

    const filteredEquipment = tempProductArray.filter(
      (item) => item.id === exploremoreid
    );

    return (
      <Box>
        {filteredEquipment.map((item, index) => (
          <Box
            key={index}
            mt={5}
            sx={{
              p: { xs: 0, sm: 2, md: 5 },
            }}
            maxWidth="1300px"
            mx="auto"
            bgcolor="white"
            border="1px solid #0000001A"
            borderRadius={2}
            mb={4} // Margin between boxes
          >
            {/* Machine Image */}
            <Box display="flex" justifyContent="center" mb={5}>
              <Image
                src={item.image}
                alt={item.Model}
                width={500} // Adjusted width
                height={150} // Adjusted height
                layout="intrinsic"
              />
            </Box>

            {/* Machine Details */}
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
              bgcolor="#ffffff" // Ensure background is white
              sx={{
                p: { xs: 0, sm: 2, md: 5 }, // Adjust padding for different screen sizes
                borderRadius: "8px",
                border: "1px solid #0000001A", // Add black border to the entire box
              }}
            >
              {/* Mapping machine details with white text and black borders */}
              {[
                { label: "Model", value: item.Model },
                { label: "Working Type", value: item.Working_Type },
                {
                  label: "Input Voltage (Phase / Current)",
                  value: item.Input_Voltage,
                },
                { label: "Motor Power", value: item.Motor_Power },
                {
                  label: "Diameter (Round Bar)",
                  value: item.Diameter_Round_Bar,
                },
                { label: "Motor RPM", value: item.Motor_RPM },
                {
                  label: "Diameter (Threaded Steel)",
                  value: item.Diameter_Threaded_Steel,
                },
                { label: "Pedals", value: item.Pedals },
                {
                  label: "Diameter of Working Disc",
                  value: item.Working_Disc_Diameter,
                },
                { label: "Dimensions", value: item.Dimensions },
                {
                  label: "Adjustable Bending Speed",
                  value: item.Adjustable_Bending_Speed,
                },
                { label: "Weight", value: item.Weight },
              ].map((detail, i) => (
                <Box
                  flexBasis="49%"
                  mb={3}
                  key={i}
                  border="1px solid #0000001A"
                  sx={{
                    p: { xs: 0, sm: 2, md: 2 },
                    borderRadius: "8px",
                    display: { xs: "block", md: "flex" },
                    alignItems: { md: "center" },
                  }}
                >
                  <Typography fontWeight="bold" color="black">
                    {detail.label}:&nbsp;
                  </Typography>
                  <Typography color="black">{detail.value || "N/A"}</Typography>
                </Box>
              ))}
            </Box>

            {/* Download Button */}
            <Box textAlign="center" mt={5}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<DownloadIcon />} // Add icon before text
                sx={{
                  color: "white", // Set text color to white
                  backgroundColor: "#2196f3", // Set button background color (if needed)
                  "&:hover": {
                    backgroundColor: "#1976d2", // Optional: Hover effect color
                  },
                }}
              >
                <Link
                  href="https://drive.google.com/file/d/1FMta2vPU7lTAk8FDERJ6zF-Ktklallre/view?usp=sharing"
                  target="_blank"
                >
                  Download Brochure
                </Link>
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
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
    const filteredEquipment = selectedCategory
      ? tempProductArray.filter(
          (item) => item.categoryName === selectedCategory
        )
      : tempProductArray.filter((item) => item.categoryId === 1);

    return (
      <Box>
        <Grid
          container
          spacing={3}
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
          {filteredEquipment.map((item, index) => (
            <Grid
              key={index}
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
                    // objectFit: "contain",
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
                {item.categoryName.toUpperCase()} - {item.Model}
              </Typography>

              <Box
                onClick={() =>
                  handleExploreMoreClick(1, item.id, item.categoryId)
                }
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
                    background: "grey[300]",
                    color: "black",
                    fontWeight: 700,
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

"use client";
import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

import Image from "next/image";
import { products } from "../../../../app/components/Equipments/product";
import allSectionsHero from "../../../../../public/allSectionsHero.svg";
import { usePathname } from "next/navigation";

const DetailsProduct = ({ params }) => {
  const theme = useTheme();
  const router = usePathname();
  console.log(router);

  const categoryKey = decodeURIComponent(params.category);
  const filteredProducts = Object.keys(products).includes(categoryKey)
    ? products[categoryKey]
    : [];
  // console.log(filteredProducts);

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
    <Box>
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
          <Typography sx={styles.heading}>Our Product&apos;s</Typography>
          <Typography sx={[styles.subHeading, { color: "white" }]}>
            <Typography
              component="span"
              sx={[{ color: "#646776" }, styles.subHeading]}
            >
              Home &nbsp;&nbsp;/&nbsp;&nbsp;
            </Typography>
            Products
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{ p: 10 }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid container sx={{ gap: "100px" }}>
          {filteredProducts
            .filter((product) => product.id === +params.productId)
            .map((product) => (
              <React.Fragment key={product.id}>
                <Grid item xs={12} lg={5}>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    backgroundColor={"#e5e8e8"}
                    // border={"1px solid gray"}
                    p={8}
                  >
                    <Image
                      src={`/${product.image}`}
                      alt={product.Model}
                      width={300}
                      height={300}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={5}>
                  <Typography variant="h4">
                    {categoryKey.toUpperCase()}
                  </Typography>
                  <Typography variant="h5" color={"#00AFF9"}>
                    {product.Model}
                  </Typography>

                  <Box
                    display={"grid"}
                    gridTemplateColumns={"repeat(2, 1fr)"}
                    gap={2}
                  >
                    {Object.keys(product).map(
                      (key) =>
                        key !== "image" &&
                        key !== "id" && (
                          <Box
                            key={key}
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            border={"1px solid lightgray"}
                            borderRadius={2}
                            p={3}
                          >
                            <Typography variant="body1">
                              <strong>{key.replace(/_/g, " ")}:</strong>{" "}
                              {product[key]}
                            </Typography>
                          </Box>
                        )
                    )}
                  </Box>
                </Grid>
              </React.Fragment>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DetailsProduct;

"use client";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import leftRedMachine from "../../../public/featuredProducts/leftRedMachine.svg";
import product1 from "../../../public/featuredProducts/product1.svg";
import product2 from "../../../public/featuredProducts/product2.svg";
import product3 from "../../../public/featuredProducts/product3.svg";
import product4 from "../../../public/featuredProducts/product4.svg";
import product5 from "../../../public/featuredProducts/product5.svg";
import product6 from "../../../public/featuredProducts/product6.svg";
import product7 from "../../../public/featuredProducts/product7.svg";
import product8 from "../../../public/featuredProducts/product8.svg";

const FeaturedProducts = () => {
  const [selected, setSelected] = useState(0);
  const theme = useTheme();
  const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  const tabsStyle = {
    textTransform: "none",
    fontSize: { md: "13px", xxl: "16px", lg: "14px", sm: "12px" },
  };
  const Product = ({ imgSrc, imgAlt, text }) => {
    return (
      <Grid item sm={3} xs={12}>
        <Box
          sx={{
            border: "1px solid #E9EEF6",
            textAlign: "center",
            borderRadius: "10px",
            mx: { xs: 6, sm: 0 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "auto",
              height: { md: "250px", sm: "200px", xs: "200px" },
              margin: "0 auto",
              backgroundColor: "#E9EEF6",
            }}
          >
            <Image
              src={imgSrc}
              alt={imgAlt}
              fill
              style={{
                padding: screenSizeSm && !screenSizeMd ? "10px" : "40px",
              }}
            />
          </Box>

          <Typography
            sx={{
              fontWeight: 600,
              color: theme.palette.text.subHead,
              fontSize: { xs: "12px", md: "16px" },
            }}
          >
            {text}
          </Typography>
        </Box>
      </Grid>
    );
  };
  // const tabContent = [
  //   [
  //     <Product
  //       key="product1"
  //       imgSrc={product1}
  //       imgAlt="product1"
  //       text="RVR880"
  //     />,
  //     <Product
  //       key="product2"
  //       imgSrc={product2}
  //       imgAlt="product2"
  //       text="GQ40"
  //     />,
  //     <Product
  //       key="product3"
  //       imgSrc={product3}
  //       imgAlt="product3"
  //       text="RT36"
  //     />,
  //     <Product
  //       key="product4"
  //       imgSrc={product4}
  //       imgAlt="product4"
  //       text="GQ42"
  //     />,
  //     <Product
  //       key="product5"
  //       imgSrc={product5}
  //       imgAlt="product5"
  //       text="MIX180T"
  //     />,
  //     <Product
  //       key="product6"
  //       imgSrc={product6}
  //       imgAlt="product6"
  //       text="RCS16"
  //     />,
  //     <Product
  //       key="product7"
  //       imgSrc={product7}
  //       imgAlt="product7"
  //       text="PORTABLE BATCHING P-500"
  //     />,
  //     <Product
  //       key="product8"
  //       imgSrc={product8}
  //       imgAlt="product8"
  //       text="SOLAR TOWER LIGHT"
  //     />,
  //   ],
  //   [
  //     // Content for "Bar Bender Series" tab
  //     <Product
  //       key="product9"
  //       imgSrc={product9}
  //       imgAlt="product9"
  //       text="GF26"
  //     />,
  //     <Product
  //       key="product10"
  //       imgSrc={product10}
  //       imgAlt="product10"
  //       text="GWH32"
  //     />,
  //     <Product
  //       key="product11"
  //       imgSrc={product11}
  //       imgAlt="product11"
  //       text="GW20S"
  //     />,
  //     <Product
  //       key="product12"
  //       imgSrc={product12}
  //       imgAlt="product12"
  //       text="GW20"
  //     />,
  //   ],
  // ];
  const handleChange = (event, newValue) => {
    setSelected(newValue);
  };
  return (
    <Box sx={{ mb: 10 }}>
      <Image
        src={leftRedMachine}
        alt="left red machine"
        style={{
          width:
            screenSizeXs && !screenSizeLg
              ? "200px"
              : screenSizeLg && !screenSizeXl
              ? "250px"
              : "auto",
          height: "auto",
        }}
      />
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
          textAlign: "center",
          textTransform: "uppercase",
          mt: { lg: -21, md: -10, sm: -8, xs: 2 },
        }}
      >
        Our{" "}
        <Typography
          component="span"
          sx={{
            fontWeight: 700,
            fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
            color: theme.palette.primary.main,
            textTransform: "uppercase",
          }}
        >
          Featured Products
        </Typography>
      </Typography>
      <Divider
        sx={{
          borderColor: theme.palette.primary.main,
          borderBottomWidth: "5px",
          width: "70px",
          mx: "auto",
          mt: "8px",
        }}
      />
      <Typography
        sx={{
          textAlign: "center",
          mt: "10px",
          color: theme.palette.text.subHead,
          fontSize: "18px",
        }}
      >
        What we Serve?
      </Typography>
      <Box
        sx={{ mt: { xl: 5, lg: 10 }, mx: { xl: 28, lg: 10, sm: 2, xs: 10 } }}
      >
        <Tabs
          value={selected}
          onChange={handleChange}
          centered
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
            "& .MuiTabs-flexContainer": {
              flexWrap: { xs: "wrap", md: "nowrap" },
            },
          }}
        >
          <Tab label="All" sx={tabsStyle} />
          <Tab label="Bar Bender Series" sx={tabsStyle} />
          <Tab label="Decoil Machine" sx={tabsStyle} />
          <Tab label="Ride On Trowel" sx={tabsStyle} />
          <Tab label="Vibrator Screed" sx={tabsStyle} />
          <Tab label="Plate Compactor" sx={tabsStyle} />
          <Tab label="Tamping Rammer" sx={tabsStyle} />
          <Tab label="Machines" sx={tabsStyle} />
          <Tab label="Engines" sx={tabsStyle} />
        </Tabs>
      </Box>
      <Box sx={{ mt: 5, mx: { xl: 28, lg: 10, sm: 2 } }}>
        <Grid container spacing={4}>
          <Product imgSrc={product1} imgAlt="product1" text="RVR880" />
          <Product imgSrc={product2} imgAlt="product2" text="GQ40" />
          <Product imgSrc={product3} imgAlt="product3" text="RT36" />
          <Product imgSrc={product4} imgAlt="product4" text="GQ42" />
          <Product imgSrc={product5} imgAlt="product5" text="MIX180T" />
          <Product imgSrc={product6} imgAlt="product6" text="RCS16" />
          <Product
            imgSrc={product7}
            imgAlt="product7"
            text="PORTABLE BATCHING P-500"
          />
          <Product
            imgSrc={product8}
            imgAlt="product8"
            text="SOLAR TOWER LIGHT"
          />
        </Grid>
        <Box sx={{ display: "flex" }}>
          <Button
            variant="contained"
            sx={{
              color: "white",
              height: { xl: "40px", xxl: "48px" },
              width: "174px",
              mt: "40px",
              mx: "auto",
            }}
          >
            Explore more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default FeaturedProducts;

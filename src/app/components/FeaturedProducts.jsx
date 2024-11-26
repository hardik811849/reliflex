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
import product9 from "../../../public/featuredProducts/product9.svg";
import product10 from "../../../public/featuredProducts/product10.svg";
import product11 from "../../../public/featuredProducts/product11.svg";
import product12 from "../../../public/featuredProducts/product12.svg";
import GW42J from "../../../public/featuredProducts/GW42J.svg";
import GW50 from "../../../public/featuredProducts/GW50.svg";
import GT414C from "../../../public/featuredProducts/GT4-14C.svg";
import GT414E from "../../../public/featuredProducts/GT4-14E.svg";
import GTW410 from "../../../public/featuredProducts/GT4-10.svg";
import GT414A1 from "../../../public/featuredProducts/GT4-14A1.svg";
import GT414A from "../../../public/featuredProducts/GT4-14A.svg";
import RT28 from "../../../public/featuredProducts/RT28.svg";
import RT281 from "../../../public/featuredProducts/RT28_1.svg";
import RT36 from "../../../public/featuredProducts/RT36.svg";
import RT36L from "../../../public/featuredProducts/RT36L.svg";
import RT361 from "../../../public/featuredProducts/RT36_1.svg";
import RVS10B from "../../../public/featuredProducts/Vibrator Screed/Asset 71.png";
import RVS25R from "../../../public/featuredProducts/Vibrator Screed/Asset 72.png";
import RVS25H from "../../../public/featuredProducts/Vibrator Screed/Asset 73.png";
import RVS25E from "../../../public/featuredProducts/Vibrator Screed/Asset 74.png";
import RPC200E from "../../../public/featuredProducts/Plate Compactor/Asset 79.png";
import RPC160 from "../../../public/featuredProducts/Plate Compactor/Asset 80.png";
import RPC90 from "../../../public/featuredProducts/Plate Compactor/Asset 81.png";
import RPC300I from "../../../public/featuredProducts/Plate Compactor/Asset 82.png";
import RPC500I from "../../../public/featuredProducts/Plate Compactor/Asset 83.png";
import RTR80ES from "..x/../../public/featuredProducts/Tamping Rammer/Asset 85.png";
import RTR80E from "../../../public/featuredProducts/Tamping Rammer/Asset 86.png";
import RTR100 from "../../../public/featuredProducts/Tamping Rammer/Asset 87.png";
import RTR90 from "../../../public/featuredProducts/Tamping Rammer/Asset 88.png";
import RTR110 from "../../../public/featuredProducts/Tamping Rammer/Asset 89.png";
import RTR80ES from "../../../public/featuredProducts/Machines/Asset 41.png";
import RTR80E from "../../../public/featuredProducts/Tamping Rammer/Asset 86.png";
import RTR100 from "../../../public/featuredProducts/Tamping Rammer/Asset 87.png";
import RTR90 from "../../../public/featuredProducts/Tamping Rammer/Asset 88.png";
import RTR110 from "../../../public/featuredProducts/Tamping Rammer/Asset 89.png";
import Link from "next/link";
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
  const tabContent = [
    [
      <Product
        key="product1"
        imgSrc={product1}
        imgAlt="product1"
        text="RVR880"
      />,
      <Product
        key="product2"
        imgSrc={product2}
        imgAlt="product2"
        text="GQ40"
      />,
      <Product
        key="product3"
        imgSrc={product3}
        imgAlt="product3"
        text="RT36"
      />,
      <Product
        key="product4"
        imgSrc={product4}
        imgAlt="product4"
        text="GQ42"
      />,
      <Product
        key="product5"
        imgSrc={product5}
        imgAlt="product5"
        text="MIX180T"
      />,
      <Product
        key="product6"
        imgSrc={product6}
        imgAlt="product6"
        text="RCS16"
      />,
      <Product
        key="product7"
        imgSrc={product7}
        imgAlt="product7"
        text="PORTABLE BATCHING P-500"
      />,
      <Product
        key="product8"
        imgSrc={product8}
        imgAlt="product8"
        text="SOLAR TOWER LIGHT"
      />,
    ],
    [
      // Content for "Bar Bender Series" tab
      <Product
        key="product9"
        imgSrc={product9}
        imgAlt="product9"
        text="GF26"
      />,
      <Product
        key="product10"
        imgSrc={product10}
        imgAlt="product10"
        text="GWH32"
      />,
      <Product
        key="product11"
        imgSrc={product11}
        imgAlt="product11"
        text="GW20S"
      />,
      <Product
        key="product12"
        imgSrc={product12}
        imgAlt="product12"
        text="GW20"
      />,
      <Product key="GW42J" imgSrc={GW42J} imgAlt="GW42J" text="GW42J" />,
      <Product key="GW50" imgSrc={GW50} imgAlt="GW50" text="GW50" />,
    ],
    [
      <Product
        key="GT4-14A_1"
        imgSrc={GT414A}
        imgAlt="GT4-14A"
        text="GT4-14A"
      />,
      <Product
        key="GT4-14A1"
        imgSrc={GT414A1}
        imgAlt="GT4-14A"
        text="GT4-14A"
      />,
      <Product key="GTW4-10" imgSrc={GTW410} imgAlt="GTW4-10" text="GTW4-10" />,
      <Product
        key="GT4-14A_2"
        imgSrc={GT414A}
        imgAlt="GT4-14A"
        text="GT4-14A"
      />,
      <Product key="GT4-14E" imgSrc={GT414E} imgAlt="GT4-14E" text="GT4-14E" />,
      <Product key="GT4-14C" imgSrc={GT414C} imgAlt="GT4-14C" text="GT4-14C" />,
    ],
    [
      <Product key="RT28" imgSrc={RT28} imgAlt="RT28" text="RT28" />,
      <Product key="RT28_1" imgSrc={RT281} imgAlt="RT28" text="RT28" />,
      <Product key="RT36" imgSrc={RT36} imgAlt="RT36" text="RT36" />,
      <Product key="RT36L" imgSrc={RT36L} imgAlt="RT36L" text="RT36L" />,
      <Product key="RT36_1" imgSrc={RT361} imgAlt="RT36" text="RT36" />,
    ],
    [
      <Product
        key="RVS10B"
        imgSrc={RVS10B}
        imgAlt="RTRVS10B28"
        text="RVS10B"
      />,
      <Product key="RVS25R" imgSrc={RVS25R} imgAlt="RVS25R" text="RVS25R" />,
      <Product key="RVS25H" imgSrc={RVS25H} imgAlt="RVS25H" text="RVS25H" />,
      <Product
        key="RVS25E"
        imgSrc={RVS25E}
        imgAlt="RVS25E"
        text="RVS25E/RVS25ES"
      />,
    ],
    [
      <Product
        key="RPC200E"
        imgSrc={RPC200E}
        imgAlt="RPC200E"
        text="RPC200E"
      />,
      <Product key="RPC160" imgSrc={RPC160} imgAlt="RPC160" text="RPC160" />,
      <Product key="RPC90" imgSrc={RPC90} imgAlt="RPC90" text="RPC90" />,
      <Product
        key="RPC300I"
        imgSrc={RPC300I}
        imgAlt="RPC300I"
        text="RPC300I"
      />,
      <Product
        key="RPC500I"
        imgSrc={RPC500I}
        imgAlt="RPC500I"
        text="RPC500I"
      />,
    ],
    [
      <Product
        key="RTR80ES"
        imgSrc={RTR80ES}
        imgAlt="RTR80ES"
        text="RTR80ES"
      />,
      <Product key="RTR80E" imgSrc={RTR80E} imgAlt="RTR80E" text="RTR80E" />,
      <Product key="RTR100" imgSrc={RTR100} imgAlt="RTR100" text="RTR100" />,
      <Product key="RTR110" imgSrc={RTR110} imgAlt="RTR110" text="RTR110" />,
      <Product key="RTR90" imgSrc={RTR90} imgAlt="RTR90" text="RTR90" />,
    ],
  ];
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
          color: theme.palette.text.main,
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
          {tabContent[selected]}
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
            <Link href="/equipment">Explore more</Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default FeaturedProducts;

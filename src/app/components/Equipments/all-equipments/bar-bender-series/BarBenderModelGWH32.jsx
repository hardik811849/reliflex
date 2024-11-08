"use client";
import { useTheme } from "@emotion/react";
import { FileDownloadOutlined, NavigateNext } from "@mui/icons-material";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import redMachine from "../../../../../../public/ourServices/redMachine.svg";

const allEquipmentsData = [
  {
    id: 1,
    imgSrc: Image,
    imgAlt: "equipment1",
    equipmentName: "GW20S",
  },
  {
    id: 2,
    imgSrc: Image,
    imgAlt: "equipment1",
    equipmentName: "GW20",
  },
  {
    id: 3,
    imgSrc: Image,
    imgAlt: "equipment1",
    equipmentName: "GW20D",
  },
  {
    id: 4,
    imgSrc: Image,
    imgAlt: "equipment1",
    equipmentName: "GF26",
  },
];

export const BarBenderModelGWH32 = () => {
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
          mb: { xs: 3, sm: 0 },
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
  const DetailBox = ({ heading, content }) => {
    return (
      <Grid item>
        <Box
          sx={{
            border: "1px solid #00000033",
            display: "flex",
            alignItems: "center",
            px: 2,
            py: 3,
            width: {
              xl: "500px",
              lg: "400px",
              md: "320px",
              sm: "450px",
              xs: "300px",
            },
            height: { xl: "auto", lg: "80px", md: "100px", sm: "20px" },
            borderRadius: "6px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              width: { lg: "250px", md: "120px" },
              mr: { lg: 0, md: 2 },
            }}
          >
            {heading}{" "}
          </Typography>
          <Typography sx={{ fontWeight: 400 }}>
            : &nbsp;&nbsp;&nbsp;{content}
          </Typography>
        </Box>
      </Grid>
    );
  };
  return (
    <Box>
      <Box
        sx={{
          width: { sm: "calc(100% - 240px)", xs: "180%" },
          ml: { md: 20, sm: 5, xs: -26 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 6 }}>
          <Box sx={{ mt: { sm: 10, xs: 0 } }}>
            <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
              BAR BENDER SERIES
            </Typography>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                fontSize: "18px",
                mt: { md: 10, sm: 5 },
                mb: 2,
              }}
            >
              MODEL: GWH32
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.subHead,
                width: { md: "80%", sm: "140%" },
                fontSize: { sm: "16px", xs: "14px" },
              }}
            >
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit.
            </Typography>
          </Box>
          {screenSizeMd && (
            <Box sx={{ display: "flex" }}>
              <Image
                src={redMachine}
                alt="redMachine"
                height={screenSizeMd && !screenSizeLg ? 230 : 300}
                width={"auto"}
              />
            </Box>
          )}
        </Box>
        <Box sx={{ display: "flex" }}>
          <Image
            src={Image}
            alt="demo model"
            style={{
              margin: "0 auto",
              width:
                screenSizeXs && !screenSizeSm
                  ? "280px"
                  : screenSizeSm && !screenSizeLg
                  ? "450px"
                  : "auto",
              height: "auto",
            }}
          />
        </Box>

        <Grid
          container
          gap={4}
          sx={{
            ml: { xxl: 24, lg: -4, xl: 0, md: -10, sm: 0, xs: -2 },
            width: {
              xl: "100%",
              lg: "110%",
              md: "140%",
              sm: "160%",
              xs: "180%",
            },
          }}
        >
          <DetailBox heading="Model" content="GWH32" />
          <DetailBox heading="Working Type" content="Automatic / Manual" />
          <DetailBox
            heading="Input Voltage ( Phase / Current )"
            content="Three Phase 50-60 Hz"
          />
          <DetailBox heading="Motor Power" content="3.5 kw / 415 V / 380 V" />
          <DetailBox heading="Diameter ( Round Bar )" content="16-32 mm" />
          <DetailBox heading="Motor RPM" content="1440r / min" />
          <DetailBox heading="Diameter ( Threaded Steel )" content="16-32 mm" />
          <DetailBox heading="Padels" content="2 No" />
          <DetailBox heading="Diameter of Working Disc" content="360 mm" />
          <DetailBox heading="Dimensions" content="850*850*1000 mm" />
          <DetailBox heading="Adjustable Bending Speed" content="10-20 R/min" />
          <DetailBox heading="Weight" content="320 kgs" />
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              color: "white",
              height: { xl: "40px", xxl: "48px" },
              width: "254px",
              mt: "60px",
            }}
            startIcon={<FileDownloadOutlined />}
          >
            Download Brochure
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xxl: "100%", lg: "110%" },
          mt: 5,
          ml: { xxl: 0, xl: -25, lg: -24, md: -20, sm: -15, xs: -24 },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
              // textAlign: "center",
              color: theme.palette.text.main,
            }}
          >
            RELATED &nbsp;&nbsp;
            <Typography
              component="span"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
              }}
            >
              PRODUCTS
            </Typography>
          </Typography>
        </Box>
        <Grid
          container
          gap={{ xxl: 6, xl: 3, lg: 4, md: 3, sm: 3, xs: 2 }}
          sx={{ mt: 6 }}
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
      </Box>
    </Box>
  );
};

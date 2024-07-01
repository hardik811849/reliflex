"use client";
import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import img1 from "../../../public/manufacturing/img1.svg";
import img2 from "../../../public/manufacturing/img2.svg";
import img3 from "../../../public/manufacturing/img3.svg";
import yellowBulldozer from "../../../public/manufacturing/yellowBulldozer.svg";

const Manufacturing = () => {
  const theme = useTheme();
  const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
  const screenSizeXXl = useMediaQuery(theme.breakpoints.up("xxl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));

  const ImageDescriptionBlock = ({ imgSrc, number, text, altImg }) => {
    return (
      <Box sx={{ mx: "auto", my: { xs: 2, sm: 0 } }}>
        <Image
          src={imgSrc}
          alt={altImg}
          width={
            screenSizeXs && !screenSizeSm
              ? 180
              : screenSizeSm && !screenSizeMd
              ? 160
              : screenSizeMd && !screenSizeLg
              ? 200
              : screenSizeLg && !screenSizeXl
              ? 250
              : screenSizeXl && !screenSizeXXl
              ? 300
              : screenSizeXXl
              ? 360
              : "auto"
          }
          height="auto"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: { sm: "-26%", xs: "-26%" },
            marginX: { md: "20px", xs: "5px" },
          }}
        >
          <Box
            sx={{
              height: { xxl: "70px", lg: "50px", md: "40px" },
              width: {
                xxl: "70px",
                xl: "50px",
                lg: "45px",
                md: "40px",
                xs: "30px",
              },
              fontSize: { xxl: "30px", xl: "20px" },
              fontWeight: 900,
              backgroundColor: theme.palette.primary.main,
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {number}
          </Box>
          <Box
            sx={{
              width: {
                xxl: "240px",
                xl: "200px",
                lg: "160px",
                md: "120px",
                xs: "110px",
              },
              height: { xxl: "70px" },
              backgroundColor: "white",
              px: 2,
              py: { xxl: 1, xl: 0.5 },
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                textTransform: "uppercase",
                fontWeight: 500,
                fontSize: { xxl: "14px", lg: "12px", xs: "12px" },
              }}
            >
              Reliflex
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xxl: "18px", lg: "14px", md: "14px", xs: "12px" },
                color: "#533B3B",
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };
  return (
    <Box>
      <Box sx={{ mb: 10, mt: -10, mx: { md: 13, sm: 5 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ mx: "auto" }}>
            <Typography
              sx={{
                fontSize: {
                  xxl: "50px",
                  xl: "40px",
                  lg: "30px",
                  md: "24px",
                  xs: "20px",
                },
                fontWeight: 700,
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: theme.palette.primary.main,
                  fontSize: {
                    xxl: "50px",
                    xl: "40px",
                    lg: "30px",
                    md: "24px",
                    xs: "20px",
                  },
                  fontWeight: 700,
                }}
              >
                M
              </Typography>
              anufacturing
            </Typography>
            <Typography
              sx={{
                fontSize: { xxl: "30px", lg: "20px", md: "14px" },
                fontWeight: 400,
                color: theme.palette.text.subHead,
              }}
            >
              Construction Equipment,
              <br />
              since 2011
            </Typography>
          </Box>
          <ImageDescriptionBlock
            imgSrc={img1}
            altImg="img1"
            number="01"
            text="Events"
          />
          <ImageDescriptionBlock
            imgSrc={img2}
            altImg="img2"
            number="02"
            text="Photo Gallery"
          />
          <ImageDescriptionBlock
            imgSrc={img3}
            altImg="img3"
            number="03"
            text="Video Gallery"
          />
        </Box>
      </Box>
      <Image
        src={yellowBulldozer}
        alt="yellow bulldozer"
        style={{ marginTop: "-10%" }}
        width={
          screenSizeXs && !screenSizeSm
            ? 200
            : screenSizeSm && !screenSizeLg
            ? 300
            : screenSizeXl && !screenSizeXXl
            ? 500
            : screenSizeXXl
            ? 650
            : 400
        }
        height={"auto"}
      />
    </Box>
  );
};
export default Manufacturing;

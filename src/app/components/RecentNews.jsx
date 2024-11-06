"use client";
import { useTheme } from "@emotion/react";
import { Box, Button, Divider, Typography, useMediaQuery } from "@mui/material";
import {
  AccessTime as AccessTimeIcon,
  ArrowRightAlt,
} from "@mui/icons-material";
import React from "react";
import Image from "next/image";
import concreteRoadCutterMachine from "../../../public/recentNews/concrete-road-cutter-machine.svg";
import LinkImg1 from "../../../public/recentNews/LinkImg1.svg";
import LinkImg2 from "../../../public/recentNews/LinkImg2.svg";
import LinkImg3 from "../../../public/recentNews/LinkImg3.svg";

const RecentNews = () => {
  const theme = useTheme();
  const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));

  const News = ({ imgSrc, imgAlt, heading, description, time }) => {
    return (
      <Box
        sx={{
          border: "1px solid #E9EEF6",
          width: { xl: "455px", lg: "370px", md: "280px", xs: "230px" },
          mx: { xs: "auto", sm: 0 },
          mb: { xs: 4, sm: 0 },
        }}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          style={{
            width:
              screenSizeXs && !screenSizeMd
                ? "230px"
                : screenSizeMd && !screenSizeLg
                ? "280px"
                : screenSizeLg && !screenSizeXl
                ? "370px"
                : "auto",
            height: "auto",
          }}
        />
        <Typography
          sx={{
            fontSize: { lg: "22px", md: "18px" },
            fontWeight: 600,
            color: theme.palette.text.subHead,
            m: 2,
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.subHead,
            m: 2,
            fontSize: { md: "16px", xs: "14px" },
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            alignItems: "center",
            m: 2,
            mt: { md: 2, xs: 4 },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <AccessTimeIcon
              sx={{
                color: theme.palette.primary.main,
                mr: { lg: 2, xs: 1 },
              }}
            />
            <Typography
              sx={{
                fontSize: { lg: "16px", md: "12px", xs: "14px" },
                mt: { md: 0.5, lg: 0, xs: 0.3 },
              }}
            >
              {time}
            </Typography>
          </Box>
          <Button
            endIcon={
              <ArrowRightAlt sx={{ color: theme.palette.primary.main }} />
            }
            sx={{
              background: "transparent",
              color: theme.palette.text.subHead,
              fontSize: { lg: "16px", md: "12px", sm: "13px" },
            }}
          >
            Read More
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box mb={10}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Image
          src={concreteRoadCutterMachine}
          alt="concrete road cutter machine"
          style={{
            width:
              screenSizeXs && !screenSizeLg
                ? "250px"
                : screenSizeLg && !screenSizeXl
                ? "300px"
                : "auto",
            height: "auto",
          }}
        />
      </Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
          textAlign: "center",
          color: theme.palette.text.main,
          mt: { sm: -20, xs: 3 },
        }}
      >
        RECENT{" "}
        <Typography
          component="span"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 700,
            fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
          }}
        >
          NEWS
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
          mx: "auto",
          mt: "10px",
          color: theme.palette.text.subHead,
          fontSize: "18px",
          width: { sm: "40%" },
        }}
      >
        Important News Feed
      </Typography>
      <Box
        sx={{
          mt: { md: 10, sm: 15, xs: 5 },
          mx: { xxl: 28, xl: 5, lg: 4.5, md: 6, sm: 2.5 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <News
          imgSrc={LinkImg1}
          imgAlt="link img 1"
          heading="Condo Developers Bet Jersey City Will Be the Next Brooklyn."
          description=" Lorem ipsum dadipi sit amet, consectetur adipi elit, sed do eiusmod
            tempor incididunt ut labore et dolore adipi magna aliqua."
          time="10, October, 2017"
        />
        <News
          imgSrc={LinkImg2}
          imgAlt="link img 2"
          heading="CCNA Featured Multiple Media Report Today Us."
          description=" Lorem ipsum dadipi sit amet, consectetur adipi elit, sed do eiusmod
            tempor incididunt ut labore et dolore adipi magna aliqua."
          time="10, October, 2017"
        />
        <News
          imgSrc={LinkImg3}
          imgAlt="link img 3"
          heading="No. 7 Line Subway Extension Project Won ENR."
          description=" Lorem ipsum dadipi sit amet, consectetur adipi elit, sed do eiusmod
            tempor incididunt ut labore et dolore adipi magna aliqua."
          time="10, October, 2017"
        />
      </Box>
    </Box>
  );
};

export default RecentNews;

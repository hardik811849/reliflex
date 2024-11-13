"use client";
import { useTheme } from "@emotion/react";
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import concreteMixerMachine from "../../../public/howDoesItWorks/concrete-mixer-machine.svg";
import Device from "../../../public/howDoesItWorks/Device.svg";
import Screen1 from "../../../public/howDoesItWorks/Screen1.svg";
import Screen2 from "../../../public/howDoesItWorks/Screen2.svg";
import thirdStepMachine from "../../../public/howDoesItWorks/thirdStepMachine.svg";
import arrows1 from "../../../public/howDoesItWorks/arrows1.svg";
import arrows2 from "../../../public/howDoesItWorks/arrows2.svg";

const HowDoesItWorks = () => {
  const theme = useTheme();
  const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));

  const ProcessItem = ({ heading, value, content, imgBlock }) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          mx: { xs: 2, sm: 0 },
          my: { xs: 2, sm: 0 },
        }}
      >
        {value === 2 && imgBlock}
        <Box id="text" sx={{ ml: { lg: 2, xl: 0 }, mt: { xs: 2, sm: 0 } }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: { lg: "70px", md: "50px", sm: "30px", xs: "28px" },
                fontWeight: 900,
                color: theme.palette.primary.main,
                mr: 3,
              }}
            >
              {value}
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { lg: "30px", md: "20px" },
                color: theme.palette.primary.main,
              }}
            >
              {heading}
            </Typography>
          </Box>
          <Box sx={{ ml: { lg: 8, md: 5 }, mr: 3 }}>
            <Divider
              sx={{
                borderColor: theme.palette.primary.main,
                borderBottomWidth: "2px",
                mt: { md: -3 },
                mr: { lg: 5, md: 2 },
              }}
            />
            <Typography
              sx={{
                color: theme.palette.text.subHead,
                mt: 3,
                fontSize: { lg: "16px", md: "14px", sm: "14px" },
                mb: { xs: 2, sm: 0 },
              }}
            >
              {content}
            </Typography>
          </Box>
        </Box>
        {value !== 2 && imgBlock}
      </Box>
    );
  };
  return (
    <Box sx={{ mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          mt: { xl: -12, lg: -18, md: -15 },
        }}
      >
        <Image
          src={concreteMixerMachine}
          alt="concrete mixer machine"
          style={{
            width:
              screenSizeXs && !screenSizeLg
                ? "200px"
                : screenSizeLg && !screenSizeXl
                ? "300px"
                : "auto",
            height: "auto",
          }}
        />
      </Box>
      <Typography
        sx={{
          textTransform: "uppercase",
          color: theme.palette.primary.main,
          fontWeight: 700,
          fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
          textAlign: "center",
          mt: { xl: -42, lg: -20, md: -6, sm: -18 },
        }}
      >
        HOW DOES IT WORKS
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
        }}
      >
        Machinery and equipment Process
      </Typography>
      <Box
        sx={{
          mt: { md: 16, sm: 10 },
          mx: { xxl: 28, xl: 8, lg: 8, md: 10, sm: 4 },
        }}
      >
        <ProcessItem
          value={1}
          heading="Search For The Equipment You Need"
          content=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra."
          imgBlock={
            <Box id="img" sx={{ position: "relative" }}>
              <Image
                src={Device}
                alt="device"
                style={{
                  width:
                    screenSizeXs && !screenSizeMd
                      ? "220px"
                      : screenSizeMd && !screenSizeLg
                      ? "350px"
                      : screenSizeLg && !screenSizeXl
                      ? "400px"
                      : "auto",
                  height: "auto",
                }}
              />
              <Image
                src={Screen1}
                alt="screen1"
                style={{
                  position: "absolute",
                  left:
                    screenSizeXs && !screenSizeMd
                      ? "21px"
                      : screenSizeMd && !screenSizeLg
                      ? "34px"
                      : screenSizeLg && !screenSizeXl
                      ? "38px"
                      : "64px",
                  top:
                    screenSizeXs && !screenSizeMd
                      ? "4px"
                      : screenSizeMd && !screenSizeLg
                      ? "6px"
                      : screenSizeLg && !screenSizeXl
                      ? "6px"
                      : "11px",
                  width:
                    screenSizeXs && !screenSizeMd
                      ? "178px"
                      : screenSizeMd && !screenSizeLg
                      ? "282px"
                      : screenSizeLg && !screenSizeXl
                      ? "324px"
                      : "auto",
                  height: "auto",
                }}
              />
            </Box>
          }
        />
        {screenSizeSm && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image src={arrows1} alt="arrows1" />
          </Box>
        )}
        <ProcessItem
          value={2}
          heading="Find The Equipment And Order It by Contact us"
          content=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra."
          imgBlock={
            <Box id="img" sx={{ position: "relative", mr: { sm: 4, md: 0 } }}>
              <Image
                src={Device}
                alt="device"
                style={{
                  width:
                    screenSizeXs && !screenSizeMd
                      ? "220px"
                      : screenSizeMd && !screenSizeLg
                      ? "350px"
                      : screenSizeLg && !screenSizeXl
                      ? "400px"
                      : "auto",
                  height: "auto",
                }}
              />
              <Image
                src={Screen2}
                alt="screen2"
                style={{
                  position: "absolute",
                  left:
                    screenSizeXs && !screenSizeMd
                      ? "21px"
                      : screenSizeMd && !screenSizeLg
                      ? "34px"
                      : screenSizeLg && !screenSizeXl
                      ? "38px"
                      : "64px",
                  top:
                    screenSizeXs && !screenSizeMd
                      ? "4px"
                      : screenSizeMd && !screenSizeLg
                      ? "6px"
                      : screenSizeLg && !screenSizeXl
                      ? "6px"
                      : "11px",
                  width:
                    screenSizeXs && !screenSizeMd
                      ? "178px"
                      : screenSizeMd && !screenSizeLg
                      ? "282px"
                      : screenSizeLg && !screenSizeXl
                      ? "324px"
                      : "auto",
                  height: "auto",
                }}
              />
            </Box>
          }
        />
        {screenSizeSm && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image src={arrows2} alt="arrows2" />
          </Box>
        )}
        <ProcessItem
          value={3}
          heading="Get The Equipment Shipped To Your Working"
          content=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra."
          imgBlock={
            <Box sx={{ ml: { md: 10, sm: 0 } }}>
              <Image
                src={thirdStepMachine}
                alt="device"
                style={{
                  width:
                    screenSizeXs && !screenSizeMd
                      ? "220px"
                      : screenSizeXs && !screenSizeLg
                      ? "282px"
                      : screenSizeXs && !screenSizeXl
                      ? "324px"
                      : "auto",
                  height: "auto",
                }}
              />
            </Box>
          }
        />
      </Box>
    </Box>
  );
};
export default HowDoesItWorks;

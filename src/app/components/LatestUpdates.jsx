"use client";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import latestUpdate1 from "../../../public/latestUpdates/latestUpdate1.svg";
import {
  KeyboardBackspace as KeyboardBackspaceIcon,
  East as EastIcon,
} from "@mui/icons-material";

const LatestUpdates = () => {
  const theme = useTheme();
  const screenSizeLg = useMediaQuery(theme.breakpoints.up("lg"));
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  return (
    <Box sx={{ mb: 10, mt: { xs: 2, sm: 0 } }}>
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: 900,
          color: theme.palette.text.grey,
          fontSize: {
            xxl: "112px",
            xl: "78px",
            lg: "60px",
            md: "50px",
            sm: "40px",
            xs: "30px",
          },
          ml: { sm: "31%", xs: 6 },
        }}
      >
        Latest Updates
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
          mt: 10,
          mx: { xxl: 12 },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xxl: "887px",
              xl: "700px",
              lg: "650px",
              md: "550px",
              sm: "470px",
            },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            boxShadow: "0px 0px 20px 0px #0000001A",
            p: 3,
            borderRadius: "10px",
            position: "relative",
            mb: { xs: 8, sm: 0 },
          }}
        >
          <Box sx={{ minWidth: { lg: "150px", md: "102px" }, my: "auto" }}>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 500,
                fontSize: { lg: "26px", md: "18px" },
                rotate: { md: "270deg" },
              }}
            >
              10 Dec 2024
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: 500, fontSize: { md: "24px", sm: "18px" } }}
            >
              Reliflex win the Best Design Award
            </Typography>
            <br />
            <Typography
              sx={{
                color: theme.palette.text.subHead,
                fontSize: { xxl: "20px", lg: "16px", sm: "14px" },
                fontWeight: 500,
              }}
            >
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus.
            </Typography>
            <br />
            <Typography
              sx={{
                color: theme.palette.text.subHead,
                fontSize: { xxl: "20px", lg: "16px", sm: "14px" },
                fontWeight: 500,
              }}
            >
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra.
            </Typography>
            <br />
            <Typography
              sx={{
                color: theme.palette.text.subHead,
                fontSize: { xxl: "20px", lg: "16px", sm: "14px" },
                fontWeight: 500,
              }}
            >
              Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus.
            </Typography>
            <br />
            <Typography
              sx={{
                color: theme.palette.primary.main,
                textDecoration: "underline",
                fontWeight: 500,
                fontSize: "16px",
              }}
            >
              Read more
            </Typography>
          </Box>
          <Box sx={{ position: "absolute", bottom: "-30px", right: "100px" }}>
            <ButtonGroup
              variant="contained"
              sx={{ height: { xl: "60px", lg: "50px" } }}
            >
              <Button
                startIcon={<KeyboardBackspaceIcon />}
                sx={{
                  color: "white",
                  px: { xl: 4.5, lg: 3 },
                  borderRadius: 0,
                  borderRight: "1px solid white !important",
                  ":hover": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              >
                Prev
              </Button>
              <Button
                endIcon={<EastIcon />}
                sx={{
                  color: "white",
                  px: { xl: 4.5, lg: 3 },
                  borderRadius: 0,
                  borderLeft: "1px solid white",
                  ":hover": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
              >
                Next
              </Button>
            </ButtonGroup>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            boxShadow: {
              xs: 0,
              md: "rgba(217, 217, 217, 1) -5px 5px, rgba(217, 217, 217, 1) -10px 10px, rgba(217, 217, 217, 1) -15px 15px, rgba(217, 217, 217, 1) -20px 20px, rgba(217, 217, 217, 1) -25px 25px",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { xl: "460px", lg: "430px", md: "380px", sm: "260px" },
            height: { xl: "498px", lg: "460px" },
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { lg: "28px", md: "24px" },
              color: "white",
              mb: 3,
            }}
          >
            Reliflex Contribution to Society
          </Typography>
          <Image
            src={latestUpdate1}
            alt="latest update1"
            width={
              screenSizeXs && !screenSizeMd
                ? 250
                : screenSizeMd && !screenSizeLg
                ? 320
                : 400
            }
          />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { lg: "18px", md: "16px" },
              color: "white",
              lineHeight: { xl: "31px", lg: "26px" },
              mx: { md: 4, sm: 1, xs: 2 },
              mt: 2,
              mb: { xs: 2, sm: 0 },
            }}
          >
            Reliflex Emergency Response Service Trust was launched to provide
            Free of Cost 24 x 7 Emergency Response Service through a Single Toll
            Free Number 987-6543-210 for the all of our customers.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default LatestUpdates;

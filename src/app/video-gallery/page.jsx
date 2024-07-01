"use client";
import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import YoutubeLogo from "../components/YoutubeLogo";
import allSectionsHero from "../../../public/allSectionsHero.svg";
import leftRedMachine from "../../../public/featuredProducts/leftRedMachine.svg";
import redMachine from "../../../public/ourServices/redMachine.svg";
import reliflexIcon from "../../../public/reliflex-icon.svg";
import frame1 from "../../../public/video-gallery/frame1.svg";
import frame2 from "../../../public/video-gallery/frame2.svg";
import frame3 from "../../../public/video-gallery/frame3.svg";
import frame4 from "../../../public/video-gallery/frame4.svg";
import frame5 from "../../../public/video-gallery/frame5.svg";
import frame6 from "../../../public/video-gallery/frame6.svg";
import frame7 from "../../../public/video-gallery/frame7.svg";
import frame8 from "../../../public/video-gallery/frame8.svg";
import frame9 from "../../../public/video-gallery/frame9.svg";
import frame10 from "../../../public/video-gallery/frame10.svg";
import frame11 from "../../../public/video-gallery/frame11.svg";
import frame12 from "../../../public/video-gallery/frame12.svg";
import frame13 from "../../../public/video-gallery/frame13.svg";
import frame14 from "../../../public/video-gallery/frame14.svg";
import frame15 from "../../../public/video-gallery/frame15.svg";
import frame16 from "../../../public/video-gallery/frame16.svg";
import frame17 from "../../../public/video-gallery/frame17.svg";
import frame18 from "../../../public/video-gallery/frame18.svg";
import frame19 from "../../../public/video-gallery/frame19.svg";
import frame20 from "../../../public/video-gallery/frame20.svg";
import { MoreVertOutlined } from "@mui/icons-material";

const VideoGalleryPage = () => {
  const theme = useTheme();
  const screenSizeXl = useMediaQuery(theme.breakpoints.up("xl"));
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

  const VideoCard = ({ imgSrc, imgAlt, name }) => {
    return (
      <Card
        item="true"
        xs={4}
        sx={{
          borderRadius: "10px",
          boxShadow: "0px 2px 10px 0px #0000001A",
          position: "relative",
        }}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={
            screenSizeXs && !screenSizeSm
              ? 280
              : screenSizeSm && !screenSizeMd
              ? 350
              : 460
          }
          height="auto"
          priority={imgAlt === "frame17" && true}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            display: "flex",
            alignItems: "center",
            my: 2,
            ml: 1,
          }}
        >
          <Box
            sx={{
              height: "40px",
              width: "40px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: 2,
            }}
          >
            <Image src={reliflexIcon} alt="src icon" />
          </Box>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 400,
              fontSize: { md: "18px", sm: "14px", xs: "10px" },
            }}
          >
            {name}
          </Typography>
          <MoreVertOutlined sx={{ color: "#fff", ml: 2 }} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: { md: 120, sm: 100, xs: 80 },
            right: { md: 200, sm: 140, xs: 100 },
            height: "53px",
            width: "76px",
          }}
        >
          <YoutubeLogo />
        </Box>
        <CardContent sx={{ width: { md: "460px", sm: "350px", xs: "280px" } }}>
          <Typography
            sx={{
              fontWeight: 500,
              color: theme.palette.text.main,
              textAlign: "center",
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const videoCardData = [
    {
      id: 1,
      imgSrc: frame1,
      imgAlt: "frame1",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 2,
      imgSrc: frame2,
      imgAlt: "frame2",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 3,
      imgSrc: frame3,
      imgAlt: "frame3",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 4,
      imgSrc: frame4,
      imgAlt: "frame4",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 5,
      imgSrc: frame5,
      imgAlt: "frame5",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 6,
      imgSrc: frame6,
      imgAlt: "frame6",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 7,
      imgSrc: frame7,
      imgAlt: "frame7",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 8,
      imgSrc: frame8,
      imgAlt: "frame8",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 9,
      imgSrc: frame9,
      imgAlt: "frame9",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 10,
      imgSrc: frame10,
      imgAlt: "frame10",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 11,
      imgSrc: frame11,
      imgAlt: "frame11",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 12,
      imgSrc: frame12,
      imgAlt: "frame12",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 13,
      imgSrc: frame13,
      imgAlt: "frame13",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 14,
      imgSrc: frame14,
      imgAlt: "frame14",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 15,
      imgSrc: frame15,
      imgAlt: "frame15",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 16,
      imgSrc: frame16,
      imgAlt: "frame16",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 17,
      imgSrc: frame17,
      imgAlt: "frame17",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 18,
      imgSrc: frame18,
      imgAlt: "frame18",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 19,
      imgSrc: frame19,
      imgAlt: "frame19",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 20,
      imgSrc: frame20,
      imgAlt: "frame20",
      name: "India's First Electric Construction Equipment",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "white", pb: 10 }}>
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
          <Typography sx={styles.heading}>Video Gallery</Typography>
          <Typography sx={[styles.subHeading, { color: "white" }]}>
            <Typography
              component="span"
              sx={[{ color: "#646776" }, styles.subHeading]}
            >
              Home &nbsp;&nbsp;/&nbsp;&nbsp; Media &nbsp;&nbsp;/&nbsp;&nbsp;{" "}
            </Typography>
            Video Gallery
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xl: "50px", lg: "40px", md: "30px", sm: "20px" },
            textAlign: "center",
            color: theme.palette.primary.main,
          }}
        >
          <Typography
            component="span"
            sx={{
              color: theme.palette.text.main,
              fontWeight: 700,
              fontSize: { xl: "50px", lg: "40px", md: "30px", sm: "20px" },
            }}
          >
            OUR VIDEO
          </Typography>
          {"  "}
          GALLERY
        </Typography>
        <Divider
          sx={{
            borderColor: theme.palette.primary.main,
            borderBottomWidth: "5px",
            width: "70px",
            mx: "auto",
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            mt: "10px",
            color: theme.palette.text.subHead,
            mx: "auto",
            width: { sm: "46%", xs: "90%" },
            mb: { md: 0, sm: 3, xs: 2 },
          }}
        >
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit.
        </Typography>
      </Box>
      {screenSizeMd && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mt: -25,
            mr: 2,
            ml: { lg: 0, md: -4 },
          }}
        >
          <Image src={leftRedMachine} alt="red machine" />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          gap={4}
          sx={{
            mx: { xxl: 28, xl: 4, lg: 18, md: 4, sm: 2 },
            mt: { lg: 5, xl: 0 },
          }}
        >
          {videoCardData?.map((item) => {
            return (
              <VideoCard
                key={item.id}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                name={item.name}
              />
            );
          })}
        </Grid>
      </Box>
      {screenSizeXl && (
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", mt: -40, mr: 12 }}
        >
          <Image src={redMachine} alt="red machine" />
        </Box>
      )}
    </Box>
  );
};
export default VideoGalleryPage;

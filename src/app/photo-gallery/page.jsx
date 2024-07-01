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
import allSectionsHero from "../../../public/allSectionsHero.svg";
import leftRedMachine from "../../../public/featuredProducts/leftRedMachine.svg";
import redMachine from "../../../public/ourServices/redMachine.svg";
import photo1 from "../../../public/photo-gallery/photo1.svg";
import photo2 from "../../../public/photo-gallery/photo2.svg";
import photo3 from "../../../public/photo-gallery/photo3.svg";
import photo4 from "../../../public/photo-gallery/photo4.svg";
import photo5 from "../../../public/photo-gallery/photo5.svg";
import photo6 from "../../../public/photo-gallery/photo6.svg";
import photo7 from "../../../public/photo-gallery/photo7.svg";
import photo8 from "../../../public/photo-gallery/photo8.svg";
import photo9 from "../../../public/photo-gallery/photo9.svg";
import photo10 from "../../../public/photo-gallery/photo10.svg";
import photo11 from "../../../public/photo-gallery/photo11.svg";
import photo12 from "../../../public/photo-gallery/photo12.svg";
import photo13 from "../../../public/photo-gallery/photo13.svg";
import photo14 from "../../../public/photo-gallery/photo14.svg";
import photo15 from "../../../public/photo-gallery/photo15.svg";
import photo16 from "../../../public/photo-gallery/photo16.svg";
import photo17 from "../../../public/photo-gallery/photo17.svg";
import photo18 from "../../../public/photo-gallery/photo18.svg";
import photo19 from "../../../public/photo-gallery/photo19.svg";
import photo20 from "../../../public/photo-gallery/photo20.svg";
import photo21 from "../../../public/photo-gallery/photo21.svg";
import photo22 from "../../../public/photo-gallery/photo22.svg";
import photo23 from "../../../public/photo-gallery/photo23.svg";

const PhotoGalleryPage = () => {
  const theme = useTheme();
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

  const PhotoCard = ({ imgSrc, imgAlt, name }) => {
    return (
      <Card
        item="true"
        xs={3}
        sx={{ borderRadius: "10px", boxShadow: "0px 2px 10px 0px #0000001A" }}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={screenSizeXs && !screenSizeSm ? 280 : 328}
        />
        <CardContent sx={{ width: { sm: "328px", xs: "280px" } }}>
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

  const photoCardData = [
    {
      id: 1,
      imgSrc: photo1,
      imgAlt: "photo1",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 2,
      imgSrc: photo2,
      imgAlt: "photo2",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 3,
      imgSrc: photo3,
      imgAlt: "photo3",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 4,
      imgSrc: photo4,
      imgAlt: "photo4",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 5,
      imgSrc: photo5,
      imgAlt: "photo5",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 6,
      imgSrc: photo6,
      imgAlt: "photo6",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 7,
      imgSrc: photo7,
      imgAlt: "photo7",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 8,
      imgSrc: photo8,
      imgAlt: "photo8",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 9,
      imgSrc: photo9,
      imgAlt: "photo9",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 10,
      imgSrc: photo10,
      imgAlt: "photo10",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 11,
      imgSrc: photo11,
      imgAlt: "photo11",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 12,
      imgSrc: photo12,
      imgAlt: "photo12",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 13,
      imgSrc: photo13,
      imgAlt: "photo13",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 14,
      imgSrc: photo14,
      imgAlt: "photo14",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 15,
      imgSrc: photo15,
      imgAlt: "photo15",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 16,
      imgSrc: photo16,
      imgAlt: "photo16",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 17,
      imgSrc: photo17,
      imgAlt: "photo17",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 18,
      imgSrc: photo18,
      imgAlt: "photo18",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 19,
      imgSrc: photo19,
      imgAlt: "photo19",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 20,
      imgSrc: photo20,
      imgAlt: "photo20",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 21,
      imgSrc: photo21,
      imgAlt: "photo21",
      name: "Reliflex Tower Crane Lifting Casting Panel",
    },
    {
      id: 22,
      imgSrc: photo22,
      imgAlt: "photo22",
      name: "India's First Electric Construction Equipment",
    },
    {
      id: 23,
      imgSrc: photo23,
      imgAlt: "photo23",
      name: "Reliflex Tower Crane Lifting Casting Panel",
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
          <Typography sx={styles.heading}>Photo Gallery</Typography>
          <Typography sx={[styles.subHeading, { color: "white" }]}>
            <Typography
              component="span"
              sx={[{ color: "#646776" }, styles.subHeading]}
            >
              Home &nbsp;&nbsp;/&nbsp;&nbsp; Media &nbsp;&nbsp;/&nbsp;&nbsp;{" "}
            </Typography>
            Photo Gallery
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
            textAlign: "center",
            color: theme.palette.primary.main,
          }}
        >
          <Typography
            component="span"
            sx={{
              color: theme.palette.text.main,
              fontWeight: 700,
              fontSize: { xl: "50px", lg: "40px", md: "30px", xs: "20px" },
            }}
          >
            OUR PHOTO
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
            mb: { sm: 3, md: 0, xs: 2 },
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
          sx={{ mx: { xxl: 30, xl: 6, lg: 12, md: 20, sm: 5 } }}
        >
          {photoCardData?.map((item) => {
            return (
              <PhotoCard
                key={item.id}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                name={item.name}
              />
            );
          })}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: { sm: -40, xs: 3 },
          mr: { xxl: 12, xl: -5, lg: 0, md: 0, sm: -7 },
        }}
      >
        <Image src={redMachine} alt="red machine" />
      </Box>
    </Box>
  );
};
export default PhotoGalleryPage;

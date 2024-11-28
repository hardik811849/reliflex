"use client";
import Hero from "./components/Hero";
import About from "./components/About/About";
import { Box, Dialog } from "@mui/material";
import Manufacturing from "./components/Manufacturing";
import LatestUpdates from "./components/LatestUpdates";
import OurServices from "./components/OurServices";
import FeaturedProducts from "./components/FeaturedProducts";
import IndustriesWeServe from "./components/IndustriesWeServe";
import HowDoesItWorks from "./components/HowDoesItWorks";
import PublicFeedback from "./components/PublicFeedback";
import RecentNews from "./components/RecentNews";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCarousel from "./components/ProductCarousel";

export default function Home() {
  const [openPopup, setOpenPopup] = useState(false);
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setOpenPopup(true);
      localStorage.setItem("hasSeenPopup", "true", { expire: 60 });
    }
  }, []);

  const handleClose = () => {
    setOpenPopup(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        <Hero />
        <About showHeader showSideCrane />
        {/* <Manufacturing /> */}
        <LatestUpdates />
        <OurServices />
        <FeaturedProducts />
        <IndustriesWeServe />
        <HowDoesItWorks />
        <PublicFeedback />
        {/* <RecentNews /> */}

        <Dialog
          open={openPopup}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: "100vw",
              height: "80.5vh",
              maxWidth: "90vw",
            },
          }}
        >
          <Slider {...settings}>
            <Box position="relative" height={"80vh"} width={"100%"}>
              <Image
                src="/B1.svg"
                alt="Image 1"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Box position="relative" height={"80vh"} width={"100%"}>
              <Image
                src="/B2.svg"
                alt="Image 2"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Box position="relative" height={"80vh"} width={"100%"}>
              <Image
                src="/B3.svg"
                alt="Image 3"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Box position="relative" height={"80vh"} width={"100%"}>
              <Image
                src="/B4.svg"
                alt="Image 4"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Slider>
        </Dialog>
      </Box>
    </>
  );
}

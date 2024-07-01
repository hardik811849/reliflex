"use client";
import Hero from "./components/Hero";
import About from "./components/About/About";
import { Box } from "@mui/material";
import Manufacturing from "./components/Manufacturing";
import LatestUpdates from "./components/LatestUpdates";
import OurServices from "./components/OurServices";
import FeaturedProducts from "./components/FeaturedProducts";
import IndustriesWeServe from "./components/IndustriesWeServe";
import HowDoesItWorks from "./components/HowDoesItWorks";
import PublicFeedback from "./components/PublicFeedback";
import RecentNews from "./components/RecentNews";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Hero />
      <About showHeader showSideCrane />
      <Manufacturing />
      <LatestUpdates />
      <OurServices />
      <FeaturedProducts />
      <IndustriesWeServe />
      <HowDoesItWorks />
      <PublicFeedback />
      <RecentNews />
    </Box>
  );
}

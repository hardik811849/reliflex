"use client";
import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  AccessTime as AccessTimeIcon,
  FmdGoodOutlined,
  IosShareOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import upcomingEvent1 from "../../../../public/events/upcomingEvents/upcomingEvent1.svg";
import upcomingEvent2 from "../../../../public/events/upcomingEvents/upcomingEvent2.svg";
import upcomingEvent3 from "../../../../public/events/upcomingEvents/upcomingEvent3.svg";
import upcomingEvent4 from "../../../../public/events/upcomingEvents/upcomingEvent4.svg";
import upcomingEvent5 from "../../../../public/events/upcomingEvents/upcomingEvent5.svg";
import upcomingEvent6 from "../../../../public/events/upcomingEvents/upcomingEvent6.svg";
import upcomingEvent7 from "../../../../public/events/upcomingEvents/upcomingEvent7.svg";
import upcomingEvent8 from "../../../../public/events/upcomingEvents/upcomingEvent8.svg";
import upcomingEvent9 from "../../../../public/events/upcomingEvents/upcomingEvent9.svg";
import upcomingEvent10 from "../../../../public/events/upcomingEvents/upcomingEvent10.svg";

const UpcomingEvents = () => {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  const UpcomingEventCard = ({
    imgSrc,
    imgAlt,
    date,
    location,
    eventName,
    eventDescription,
  }) => {
    return (
      <Card
        item="true"
        xs={3}
        md={2}
        sx={{ borderRadius: "10px", boxShadow: "0px 2px 10px 0px #0000001A" }}
      >
        <Box sx={{ position: "relative" }}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={screenSizeXs && !screenSizeSm ? 280 : 328}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "white",
              borderRadius: "50%",
              p: "8px",
              m: 2,
              ":hover": {
                cursor: "pointer",
              },
            }}
          >
            <IosShareOutlined />
          </Box>
        </Box>
        <CardContent sx={{ width: { sm: "328px", xs: "280px" } }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeIcon
                sx={{ color: theme.palette.primary.main, mr: 0.5 }}
              />
              <Typography
                sx={{ color: theme.palette.text.subHead, fontSize: "13px" }}
              >
                {date}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FmdGoodOutlined
                sx={{ color: theme.palette.primary.main, mr: 0.5 }}
              />
              <Typography
                sx={{ color: theme.palette.text.subHead, fontSize: "13px" }}
              >
                {location}
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              color: theme.palette.text.main,
              my: 2,
            }}
          >
            {eventName}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.text.subHead,
              lineHeight: "18px",
            }}
          >
            {eventDescription}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  return (
    <Grid
      container
      gap={4}
      justifyContent="center"
      alignItems="center"
      sx={{ mx: { xxl: 30, xl: 6, lg: 10, md: 20, sm: 4.5 } }}
    >
      <UpcomingEventCard
        imgSrc={upcomingEvent1}
        imgAlt="upcoming event 1"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <UpcomingEventCard
        imgSrc={upcomingEvent2}
        imgAlt="upcoming event 2"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <UpcomingEventCard
        imgSrc={upcomingEvent3}
        imgAlt="upcoming event 3"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <UpcomingEventCard
        imgSrc={upcomingEvent4}
        imgAlt="upcoming event 4"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <UpcomingEventCard
        imgSrc={upcomingEvent5}
        imgAlt="upcoming event 5"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <UpcomingEventCard
        imgSrc={upcomingEvent6}
        imgAlt="upcoming event 6"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <UpcomingEventCard
        imgSrc={upcomingEvent7}
        imgAlt="upcoming event 7"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <UpcomingEventCard
        imgSrc={upcomingEvent8}
        imgAlt="upcoming event 8"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <UpcomingEventCard
        imgSrc={upcomingEvent9}
        imgAlt="upcoming event 9"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <UpcomingEventCard
        imgSrc={upcomingEvent10}
        imgAlt="upcoming event 10"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <Box
        item="true"
        xs={3}
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          width: "328px",
          maxHeight: "372px",
          borderRadius: "10px",
          boxShadow: "0px 2px 10px 0px #0000001A",
        }}
      >
        <Typography
          sx={{ fontWeight: 900, fontSize: "58px", color: "#D7D7D7" }}
        >
          Coming Soon
        </Typography>
      </Box>
    </Grid>
  );
};

export default UpcomingEvents;

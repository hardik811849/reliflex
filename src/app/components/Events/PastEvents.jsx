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
import pastEvent1 from "../../../../public/events/pastEvents/pastEvent1.svg";
import pastEvent2 from "../../../../public/events/pastEvents/pastEvent2.svg";
import pastEvent3 from "../../../../public/events/pastEvents/pastEvent3.svg";
import pastEvent4 from "../../../../public/events/pastEvents/pastEvent4.svg";
import pastEvent5 from "../../../../public/events/pastEvents/pastEvent5.svg";
import pastEvent6 from "../../../../public/events/pastEvents/pastEvent6.svg";
import pastEvent7 from "../../../../public/events/pastEvents/pastEvent7.svg";
import pastEvent8 from "../../../../public/events/pastEvents/pastEvent8.svg";
import pastEvent9 from "../../../../public/events/pastEvents/pastEvent9.svg";
import pastEvent10 from "../../../../public/events/pastEvents/pastEvent10.svg";
import pastEvent11 from "../../../../public/events/pastEvents/pastEvent11.svg";
import pastEvent12 from "../../../../public/events/pastEvents/pastEvent12.svg";
import pastEvent13 from "../../../../public/events/pastEvents/pastEvent13.svg";
import pastEvent14 from "../../../../public/events/pastEvents/pastEvent14.svg";
import pastEvent15 from "../../../../public/events/pastEvents/pastEvent15.svg";

const PastEvents = () => {
  const theme = useTheme();
  const screenSizeSm = useMediaQuery(theme.breakpoints.up("sm"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));

  const PastEventCard = ({
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
      sx={{ mx: { xxl: 30, xl: 6, lg: 10, md: 20, sm: 5 } }}
      justifyContent="center"
      alignItems="center"
    >
      <PastEventCard
        imgSrc={pastEvent1}
        imgAlt="past event 1"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent2}
        imgAlt="past event 2"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent3}
        imgAlt="past event 3"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent4}
        imgAlt="past event 4"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent5}
        imgAlt="past event 5"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent6}
        imgAlt="past event 6"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent7}
        imgAlt="past event 7"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent8}
        imgAlt="past event 8"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent9}
        imgAlt="past event 9"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent10}
        imgAlt="past event 10"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent11}
        imgAlt="past event 11"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent12}
        imgAlt="past event 12"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent13}
        imgAlt="past event 13"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent14}
        imgAlt="past event 14"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
      <PastEventCard
        imgSrc={pastEvent15}
        imgAlt="past event 15"
        date="24 July, 2024"
        location="California, USA"
        eventName="Event Name"
        eventDescription=" Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie."
      />
    </Grid>
  );
};

export default PastEvents;

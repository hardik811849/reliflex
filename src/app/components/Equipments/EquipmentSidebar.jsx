"use client";
import { useTheme } from "@emotion/react";
import { ArrowOutward, Menu as MenuIcon, Search } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { AccordionEquipment } from "./AccordionEquipment";
import { BarBenderSeriesSD } from "./all-equipments/bar-bender-series/BarBenderSeriesSD";
import { SuspendedPlatformSD } from "./all-equipments/suspended-platform/SuspendedPlatformSD";

const drawerWidth = { md: 300, sm: 260 };

const EquipmentSidebar = ({ demoSelectModel, setDemoSelectModel }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const styles = {
    fontStyle: {
      fontWeight: 600,
      fontSize: "16px",
    },
  };

  const drawerContent = (
    <Box>
      <Box sx={{ display: "flex", mb: 4 }}>
        <FormControl sx={{ m: 1, width: "35ch", mx: "auto" }} variant="filled">
          <OutlinedInput
            placeholder="Search products..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: { md: "26px", sm: "20px" },
          textAlign: "center",
        }}
      >
        Product Categories
      </Typography>
      <Divider
        sx={{
          borderColor: theme.palette.primary.main,
          borderBottomWidth: "2px",
          width: "250px",
          mx: "auto",
          mt: "4px",
          mb: 2,
        }}
      />
      <Box>
        <AccordionEquipment
          panel="panel1"
          summary={`BAR BENDER SERIES (11)`}
          details={
            <BarBenderSeriesSD setDemoSelectModel={setDemoSelectModel} />
          }
        />
        <AccordionEquipment
          panel="panel2"
          summary={`suspended platform`}
          details={<SuspendedPlatformSD />}
        />
        <AccordionEquipment
          panel="panel3"
          summary={`portable bar cutter series`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel4"
          summary={`punching shearing machine`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel5"
          summary={`plate compactor`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel6"
          summary={`vibratory road rollers`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel7"
          summary={`ENGINES(19)`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel8"
          summary={`machines`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel9"
          summary={`portable machines`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel10"
          summary={`trolly mixer`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel11"
          summary={`shortcrete pump`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel12"
          summary={`bar cutter series`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel13"
          summary={`power trowels / power floater`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel14"
          summary={`scrape straightening machine`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel15"
          summary={`concrete cutter / groove cutter`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel16"
          summary={`milling / scarifing machine`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel17"
          summary={`laser screed rls400`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel18"
          summary={`vibrator screed`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel19"
          summary={`grinding polishing machine`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel20"
          summary={`laser screed rls325`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel21"
          summary={`stand type mixer`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel22"
          summary={`flooring equipments`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel23"
          summary={`portable bar bender series`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel24"
          summary={`laser screed rls500`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel25"
          summary={`decoil machine`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel26"
          summary={`bar threading machine`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel27"
          summary={`ride on trowel`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel28"
          summary={`concrete vibratory paver`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel29"
          summary={`tamping rammer`}
          details={<BarBenderSeriesSD />}
        />
        <AccordionEquipment
          panel="panel30"
          summary={`vibratory road rollers`}
          details={<BarBenderSeriesSD />}
        />
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{
              mx: 2,
              mt: 4,
              border: "1px solid #777",
              borderRadius: "10px",
            }}
          >
            <MenuIcon />
            <Typography sx={{ ml: 2 }}>All Products</Typography>
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth.sm,
              },
            }}
          >
            {drawerContent}
          </Drawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              position: "absolute",
              transition: "none !important",
              top: {
                xxl: demoSelectModel ? "70%" : "96%",
                xl: demoSelectModel ? "90%" : "130%",
                lg: demoSelectModel ? "100%" : "140%",
                md: demoSelectModel ? "100%" : "140%",
                sm: demoSelectModel ? "100%" : "140%",
              },
              zIndex: 0,
              minHeight: {
                xxl: demoSelectModel ? "158vh" : "200vh",
                xl: demoSelectModel ? "190vh" : "240vh",
                lg: demoSelectModel ? "210vh" : "220vh",
                md: demoSelectModel ? "230vh" : "190vh",
                sm: demoSelectModel ? "230vh" : "240vh",
              },
              ml: { xxl: 10 },
              "&::-webkit-scrollbar": {
                width: "0.3em",
              },
              "&::-webkit-scrollbar-track": {
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0,0,0,.1)",
                borderRadius: "10px",
              },
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      )}
    </>
  );
};
export default EquipmentSidebar;

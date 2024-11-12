import { Box, Divider, Drawer, FormControl, IconButton, InputAdornment, OutlinedInput, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Menu as MenuIcon, Search, ArrowForward } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const drawerWidth = { md: 300, sm: 260 };

const EquipmentSidebar = ({ demoSelectModel, setSelectedCategory }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSummary, setActiveSummary] = useState(null);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    setActiveSummary("bar bender");
  }, []);

  const handleClick = (summary) => {
    console.log("summary", summary);
    setActiveSummary(summary);
    setSelectedCategory(summary);
  };

  const summaries = [
    { id: "1", name: "bar bender" },
    { id: "2", name: "suspended platform" },
    { id: "3", name: "portable bar cutter series" },
    { id: "4", name: "punching shearing machine" },
    { id: "5", name: "plate compactor" },
    { id: "6", name: "vibratory road rollers" },
    { id: "7", name: "engines" },
    { id: "8", name: "machines" },
    { id: "9", name: "portable machine" },
    { id: "10", name: "trolley mixer" },
    { id: "11", name: "shotcrete pump" },
    { id: "12", name: "bar cutter" },
    { id: "13", name: "power trowels/ power floater" },
    { id: "14", name: "scraper straightening machine" },
    { id: "15", name: "concrete cutter / groove cutter" },
    { id: "16", name: "milling / scarifying machine" },
    { id: "17", name: "laser screed" },
    { id: "18", name: "vibrator screed" },
    { id: "19", name: "grinding polishing machine" },
    { id: "20", name: "laser screed rls325" },
    { id: "21", name: "stand tyre mixer" },
    { id: "22", name: "flooring equipment" },
    { id: "23", name: "portable bar bender" },
    { id: "24", name: "laser screed rls500" },
    { id: "25", name: "decoil machine" },
    { id: "26", name: "bar threading machine" },
    { id: "27", name: "ride on trowel" },
    { id: "28", name: "concrete spraying machine" },
    { id: "29", name: "tamping rammer" },
    { id: "30", name: "vibratorry road roller" },
  ];

  const drawerContent = (
    <Box sx={{ maxHeight: "500px", overflowY: "auto" }}>
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
        {summaries.map((item, index) => (
          <Box
            key={index}
            onClick={() => handleClick(item.name)}
            sx={{
              cursor: "pointer",
              backgroundColor:
                activeSummary === item.name
                  ? theme.palette.action.hover
                  : "transparent",
              padding: "10px",
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
              color: activeSummary === item.name ? "#00AFF9" : "inherit",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: activeSummary === item.name ? "#00AFF9" : "inherit",
              }}
            >
              {item.name}
            </Typography>
            <ArrowForward
              sx={{
                fontSize: "16px",
                color: activeSummary === item.name ? "#00AFF9" : "inherit",
              }}
            />
          </Box>
        ))}
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
            onClick={() => toggleDrawer(true)}
            edge="start"
            sx={{
              mx: 2,
              mt: 4,
              color: "#00AFF9",
              gap: 1,
              border: "1px solid #00AFF9",
              borderRadius: "10px",
            }}
          >
            <MenuIcon />
            <Typography sx={{ color: "#00AFF9" }}>All Products</Typography>
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth.sm,
                maxHeight: "500px", // Set max height to 500px
                overflowY: "auto",  // Allow vertical scrolling if content exceeds the height
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
                xxl: demoSelectModel ? "70%" : "83%",
                xl: demoSelectModel ? "90%" : "60%",
                lg: demoSelectModel ? "100%" : "60%",
                md: demoSelectModel ? "100%" : "60%",
                sm: demoSelectModel ? "100%" : "60%",
              },
              zIndex: 0,
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
              maxHeight: "450px", // Set max height to 500px for the permanent drawer
              overflowY: "auto",  // Allow vertical scrolling if content exceeds the height
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


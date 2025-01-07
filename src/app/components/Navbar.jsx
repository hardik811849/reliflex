"use client";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import reliflexLogo from "../../../public/reliflex-logo.svg";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";
import { grey } from "@mui/material/colors";

const Navbar = () => {
  const theme = useTheme();
  const screenSizeMd = useMediaQuery(theme.breakpoints.up("md"));
  const screenSizeXs = useMediaQuery(theme.breakpoints.up("xs"));
  const router = useRouter();
  const [companyAnchorEl, setCompanyAnchorEl] = useState(null);
  const [mediaAnchorEl, setMediaAnchorEl] = useState(null);
  const [backgroundDrop, setBackgroundDrop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleCompanyCloseMenu = () => {
    setCompanyAnchorEl(null);
  };
  const handleMediaCloseMenu = () => {
    setMediaAnchorEl(null);
  };
  const handleCompanyMenuOpen = (event) => {
    setCompanyAnchorEl(event.currentTarget);
  };
  const handleMediaMenuOpen = (event) => {
    setMediaAnchorEl(event.currentTarget);
  };

  // const RaiseTicketButton = () => (
  //   <Button
  //     sx={{
  //       backgroundColor: theme.palette.primary.main,
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //       width: { lg: "175px", md: "130px", xs: "70%" },
  //       height: { lg: "40px", xxl: "48px", md: "36px", xs: "30px" },
  //       color: "white",
  //       ml: { md: "0px", xs: "20px" },
  //       fontSize: { md: "14px", xxl: "16px", xs: "14px" },
  //       fontWeight: 600,
  //       borderRadius: "4px",
  //     }}
  //   >
  //     Raise a Ticket
  //   </Button>
  // );
  const InquireNow = () => (
    <div>
      {/* First Button - Orange */}
      <Button
        sx={{
          textAlign: "left",
          mx: 2.5,
          mb: 1.5, // Adds space between buttons (5px)
          borderRadius: "7px", // Adds minor border radius
          backgroundColor: "orange", // Primary color (keeps the color the same)
          color: "white", // Text color white
          border: "1px solid transparent", // Default border (invisible)
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "208px",
          height: { lg: "40px", xxl: "48px", md: "36px", xs: "49px" },
          fontSize: { md: "14px", xxl: "16px", xs: "14px" },
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "orange",
            color: "white",
          },
        }}
      >
        Inquire Now
      </Button>

      {/* Second Button - Green */}
      {/* <Button
        sx={{
          textAlign: "left",
          mx: 2.5,
          mb: 1.5, // Adds space between buttons (5px)
          borderRadius: "7px", // Adds minor border radius
          backgroundColor: "green", // Primary color (keeps the color the same)
          color: "white", // Text color white
          border: "1px solid transparent", // Default border (invisible)
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "208px",
          height: { lg: "40px", xxl: "48px", md: "36px", xs: "49px" },
          fontSize: { md: "14px", xxl: "16px", xs: "14px" },
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "green",
            color: "white",
          },
        }}
      >
        Share
      </Button> */}
    </div>
  );

  const ShareButtonn = () => (
    <Button
        sx={{
          textAlign: "left",
          mx: 2.5,
          mb: 1.5, // Adds space between buttons (5px)
          borderRadius: "7px", // Adds minor border radius
          backgroundColor: "green", // Primary color (keeps the color the same)
          color: "white", // Text color white
          border: "1px solid transparent", // Default border (invisible)
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "208px",
          height: { lg: "40px", xxl: "48px", md: "36px", xs: "49px" },
          fontSize: { md: "14px", xxl: "16px", xs: "14px" },
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "green",
            color: "white",
          },
        }}
      >
        Share
      </Button>
  );

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Company", path: "/company" },
    { label: "Equipment", path: "/equipment" },
    { label: "Catalog", path: "/catalog" },
    { label: "Inquire Now", path: "/inquire" },
    // { label: "Raise Ticket", path: "/raise-ticket" },
    // { label: Catalouge, path: "/catalog" },
  ];

  const dropdownClick = (event, item) => {
    switch (item.label) {
      case "Company":
        handleCompanyMenuOpen(event);
        break;
      case "Media":
        handleMediaMenuOpen(event);
        break;
      default:
        router.push(item.path);
        break;
    }
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setBackgroundDrop(true);
    } else {
      setBackgroundDrop(false);
    }
  };

  useEffect(() => {
    global?.window && window.addEventListener("scroll", changeColor);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <AppBar
        component="nav"
        style={{
          paddingRight: "0px",
          backgroundColor: backgroundDrop ? "rgba(0,0,0,0.75)" : "transparent",
          boxShadow: "none",
          height: "80px",
          paddingTop: "8px",
        }}
      >
        <Menu
          anchorEl={companyAnchorEl}
          open={Boolean(companyAnchorEl)}
          onClose={handleCompanyCloseMenu}
          sx={{
            mt: 1,
            position: "absolute",
            "& .MuiMenu-list": {
              width: { sm: "180px", xs: "60%", md: "auto" },
            },
          }}
        >
          <MenuItem
            onClick={() => {
              router.push("/about-us");
              handleCompanyCloseMenu();
            }}
          >
            About Us
          </MenuItem>
        </Menu>
        <Toolbar sx={{ mx: { xl: "100px", xxl: "250px" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { xs: "block", md: "none" },
              mr: { sm: "80%", xs: "50%" },
            }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Box variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Image
                src={reliflexLogo}
                width={screenSizeXs && !screenSizeMd ? 120 : 200}
                height={screenSizeXs && !screenSizeMd ? "auto" : 60}
                alt="reliflex"
                priority
              />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item, index) => (
              <Button
                key={item.label}
                sx={{
                  color:
                    router.pathname === item.path
                      ? theme.palette.primary.main
                      : theme.palette.primary.white,
                  fontSize: { lg: "14px", xxl: "16px", md: "23px", sm: "23px" },
                  fontWeight: 500,
                  zIndex: 10,
                  mr: index !== navItems.length - 1 ? 4 : 0,
                  position: "relative",
                }}
                endIcon={
                  (item.label === "Company" || item.label === "Media") && (
                    <KeyboardArrowDown />
                  )
                }
                onClick={(event) => dropdownClick(event, item)}
              >
                {/* {item.label === "Inquire Now" ? (
                  <InquireNow />
                ) : item.label === "Raise Ticket" ? (
                  <raiseTicketButton />
                ) : typeof item.label === "string" ? (
                  item.label
                ) : (
                  item.label
                )}
                {item.label} */}
                {item.label === "Inquire Now" ? <InquireNow /> : item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { sm: "40%", xs: "50%" },
            },
          }}
        >
          <div
            style={{
              width: "100%", // Makes the div take the full width of its container
              backgroundColor: "#33566c", // Sets the background color to the desired blue
              display: "flex", // Aligns the content horizontally
              justifyContent: "center", // Centers the logo horizontally
              padding: "10px 0", // Adds vertical padding for better spacing
              margin: "0 0 10px 0"
            }}
          >
            <Link href="/">
              <Image
                src={reliflexLogo}
                width={screenSizeXs && !screenSizeMd ? 180 : 250} // Increase size as needed
                height={80} // Increased height to make it bigger
                alt="reliflex"
                priority
                sx={{
                  padding: "20px", // Adds 20px padding around the logo
                  paddingLeft: "30px", // Adds 30px left padding
                  objectFit: "contain", // Ensure the logo scales properly without distortion
                  backgroundColor: "#00AFF9", // Set background color to the desired blue
                  borderRadius: "10px", // Optionally, add border radius for rounded corners
                }}
              />
            </Link>
            
          </div>


          {navItems.map((item, index) => (
            <ListItem key={item.label} disablePadding sx={{
              mt: "3px", // Adds margin-top of 10px
              mb: "3px", // Adds margin-bottom of 10px
            }}>
              {item.label === "Inquire Now" ? (
                <>
                <InquireNow />
                <ShareButtonn />
                </>
              ) : (
                <ListItemButton
                sx={{
                  textAlign: "left",
                  mx: 2.5,
                  mt: 0.75,
                  mb: 0.75, // Adds space between buttons (5px)
                  borderRadius: "7px", // Adds minor border radius
                  backgroundColor: "#00AFF9",
                  color: "white",
                  border: "1px solid transparent", // Default border (invisible)
                  backgroundImage: item.label === "Home" ? "url(/path/to/home-logo.png)" : "none", // Add logo behind Home button
                  backgroundSize: "contain", // Ensure the logo is contained within the button
                  backgroundPosition: "center", // Center the logo
                  backgroundRepeat: "no-repeat", // Prevent the logo from repeating
                  "&:hover": {
                    backgroundColor: "#00AFF9",
                    color: "white",
                  },
                }}
              >
                <ListItemText
                  primary={typeof item.label === "string" ? item.label : ""}
                  onClick={(event) => dropdownClick(event, item)}
                  sx={{ fontSize: "30px" }} // Set font size to a bigger value (e.g., 20px)
                />
                {item.label === "Company" && (
                  <KeyboardArrowDown
                    onClick={(event) => dropdownClick(event, item)}
                    sx={{
                      color: "inherit", // Ensures the arrow color matches text color
                    }}
                  />
                )}
              </ListItemButton>

              )}
            </ListItem>
          ))}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;

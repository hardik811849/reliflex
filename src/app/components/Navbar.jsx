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
  const raiseTicketButton = (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { lg: "175px", md: "130px", xs: "inherit" },
        height: { lg: "40px", xxl: "48px", md: "36px", xs: "30px" },
        color: "white",
        fontSize: { md: "14px", xxl: "16px", xs: "14px" },
        fontWeight: 600,
        borderRadius: "4px",
      }}
    >
      Raise a Ticket
    </Box>
  );
  const navItems = [
    "Home",
    "Company",
    "Equipment",
    "Media",
    "Inquire Now",
    raiseTicketButton,
  ];

  const dropdownClick = (event, item) => {
    if (item === "Company") {
      handleCompanyMenuOpen(event);
    } else if (item === "Media") {
      handleMediaMenuOpen(event);
    } else if (item === "Inquire Now") {
      router.push("/inquire");
    } else if (item === "Home") {
      router.push("/");
    } else if (item === "Equipment") {
      router.push("/equipment");
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
          <MenuItem
            onClick={() => {
              router.push("/faqs");
              handleCompanyCloseMenu();
            }}
          >
            FAQ
          </MenuItem>
        </Menu>
        <Menu
          anchorEl={mediaAnchorEl}
          open={Boolean(mediaAnchorEl)}
          onClose={handleMediaCloseMenu}
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
              router.push("/events");
              handleMediaCloseMenu();
            }}
          >
            Events
          </MenuItem>
          {/* <MenuItem
            onClick={() => {
              router.push("/photo-gallery");
              handleMediaCloseMenu();
            }}
          >
            Photo Gallery
          </MenuItem>
          <MenuItem
            onClick={() => {
              router.push("/video-gallery");
              handleMediaCloseMenu();
            }}
          >
            Video Gallery
          </MenuItem> */}
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
                alt="reliflex logo"
                priority
              />
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item, index) => (
              <Button
                key={item}
                sx={{
                  color:
                    item === "Home"
                      ? theme.palette.primary.main
                      : theme.palette.primary.white,
                  fontSize: { lg: "14px", xxl: "16px", md: "13px", sm: "12px" },
                  fontWeight: 500,
                  zIndex: 10,
                  mr: index !== 5 && 4,
                  position: "relative",
                }}
                endIcon={
                  (item === "Company" || item === "Media") && (
                    <KeyboardArrowDown sx={{ ml: -0.8 }} />
                  )
                }
                onClick={(event) => dropdownClick(event, item)}
              >
                {item}
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { sm: "30%", xs: "60%" },
              pt: 2,
            },
          }}
        >
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "left", mx: 2 }}>
                <ListItemText
                  primary={item}
                  onClick={(event) => dropdownClick(event, item)}
                />
                {(item === "Company" || item === "Media") && (
                  <KeyboardArrowDown
                    sx={{ ml: -0.8 }}
                    onClick={(event) => dropdownClick(event, item)}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;

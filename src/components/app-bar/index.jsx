import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { logo, wave } from "../icons";
import { Box, ButtonBase, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginTop: 16
  },
  dp: {
    width: 29,
    height: 29,
    borderRadius: "50%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    display: "flex",
    height: 44,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(3),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  toolbar:{
    padding:0,
    [theme.breakpoints.between("sm", 'md')]:{
      flexDirection:"column"
    }
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export const Appbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link color="black">Explore</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link color="black">Drops</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link color="black">Community</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Box fontFamily="GilroyBold" mx={5} display="flex">
          <Link color="black">{wave}</Link>
          <Box
            height="8px"
            width="8px"
            borderRadius="4px"
            bgcolor="#F5841F"
            position="relative"
            top={-6}
            right={0}
          />
        </Box>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Link color="black">Explore</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link color="black">Drops</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link color="black">Community</Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Box fontFamily="GilroyBold" display="flex">
          <Link color="black">{wave}</Link>
          <Box
            height="8px"
            width="8px"
            borderRadius="4px"
            bgcolor="#F5841F"
            position="relative"
            top={-6}
            right={0}
          />
        </Box>
      </MenuItem>

      <MenuItem onClick={handleMobileMenuClose}>
        <Box border="3px solid #E3E3E3" borderRadius="50%" display="flex">
          <img
            src="https://v4.mui.com/static/images/avatar/2.jpg"
            alt="dp"
            className={classes.dp}
          />
        </Box>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Box
          component={ButtonBase}
          fontFamily="GilroySemiBold"
          bgcolor="black"
          color="white"
          display="flex"
          width={156}
          height={44}
          alignItems="center"
          justifyContent="center"
        >
          Create
        </Box>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Box>{logo}</Box>
          <Box
            className={classes.search}
            border="1px solid #E3E3E3"
            borderRadius={0}
          >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search art or an artist…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Box fontFamily="GilroyBold" ml={4}>
              <Link color="black">Explore</Link>
            </Box>
            <Box fontFamily="GilroyBold" mx={5}>
              <Link color="black">Drops</Link>
            </Box>
            <Box fontFamily="GilroyBold">
              <Link color="black">Community</Link>
            </Box>
            <Box fontFamily="GilroyBold" mx={5} display="flex">
              <Link color="black">{wave}</Link>
              <Box
                height="8px"
                width="8px"
                borderRadius="4px"
                bgcolor="#F5841F"
                position="relative"
                top={-6}
                right={0}
              />
            </Box>
            <Box border="3px solid #E3E3E3" borderRadius="50%" display="flex">
              <img
                src="https://v4.mui.com/static/images/avatar/2.jpg"
                alt="dp"
                className={classes.dp}
              />
            </Box>
            <Box
              component={ButtonBase}
              fontFamily="GilroySemiBold"
              ml={5}
              bgcolor="black"
              color="white"
              display="flex"
              width={156}
              height={44}
              alignItems="center"
              justifyContent="center"
            >
              Create
            </Box>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

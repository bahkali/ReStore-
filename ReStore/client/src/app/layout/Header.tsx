import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { title } from "process";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginBottom: 24,
    flexGrow: 1,
  },
  brand: {
    color: "inherit",
    textDecoration: "none",
  },
  toolbarStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    color: "inherit",
    typography: "h3",
    textDecoration: "none",
    "&:hover": {
      color: "#ce93d8",
    },
    "&:active": {
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
  list: {
    display: "flex",
  },
  cartIcon: {
    color: "inherit",
  },
});

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

export default function Header({ darkMode, handleThemeChange }: Props) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbarStyle}>
        <Box display="flex" alignItems="center">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography
            exact
            className={classes.brand}
            component={NavLink}
            to="/"
            variant="h6"
          >
            RE-STORE
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <List className={classes.list}>
            {midLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                className={classes.nav}
              >
                {title.toLowerCase()}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box display="flex" alignItems="center">
          <IconButton size="medium" className={classes.cartIcon}>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List className={classes.list}>
            {rightLinks.map(({ title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                className={classes.nav}
              >
                {title.toLowerCase()}
              </ListItem>
            ))}
          </List>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

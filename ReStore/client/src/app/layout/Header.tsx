import {
  AppBar,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginBottom: 24,
    flexGrow: 1,
  },
  toggle: {
    flexGrow: 1,
  },
});

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
      </Toolbar>
      <Switch checked={darkMode} onChange={handleThemeChange} />
    </AppBar>
  );
}

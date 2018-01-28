import React from "react";
import AppBar from "material-ui/AppBar";
import Typography from "material-ui/Typography";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";

type PropTypes = {
  classes?: object
};

const styles = {
  flex: {
    flex: 1
  },
  linkStyle: {
    textDecoration: "none",
    color: "white"
  }
};

const Header = (props): PropTypes => {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography type="title" color="inherit" className={classes.flex}>
          <Link to="/" className={classes.linkStyle}>
            Recruting App
          </Link>
        </Typography>
        <Link to="/vacancies" className={classes.linkStyle}>
          <Button color="inherit">Vacancies</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  classes: {}
};

export default withStyles(styles)(Header);

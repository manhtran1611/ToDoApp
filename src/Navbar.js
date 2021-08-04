import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles, withTheme } from "@material-ui/core/styles";
import {
  IconButton,
  InputBase,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import {
  LanguageContext,
  withLanguageContext,
} from "./contexts/LanguageContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    const { language } = this.props.languageContext;
    return (
      <div className={classes.root}>
        <AppBar position="static" colors={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>🤣</span>
            </IconButton>
            <Typography className={classes.title} variant="h6" colors="inherit">
              App Title
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles, { withTheme })(Navbar));

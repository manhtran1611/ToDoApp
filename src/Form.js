import React, { Component } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
  withStyles,
} from "@material-ui/core";
import styles from "./styles/FormStyles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { LanguageContext } from "./contexts/LanguageContext";

const words = {
  english: {
    signIn: "Sign In",
    email: "Email",
    password: "Password",
    remember: "Remember Me",
  },
  french: {
    signIn: "s'identifier",
    email: "Adresse e-mail",
    password: "le mot de passe",
    remember: "souviens-toi de moi",
  },
  spanish: {
    signIn: "iniciar sesión",
    email: "Correo electrónico",
    password: "contraseña",
    remember: "Recuérdame",
  },
};

class Form extends Component {
  static contextType = LanguageContext;
  render() {
    const { language, changeLanguage } = this.context;
    const { classes } = this.props;
    const { email, signIn, password, remember } = words[language];
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
            <MenuItem value="spanish">Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input id="email" name="email" autoFocus></Input>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input id="password" name="password" autoFocus></Input>
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={remember}
            />

            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              className={classes.submit}
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);

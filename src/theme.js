import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Lato",
  },
  palette: {
    primary: {
      light: "#808080",
      main: "#808080",
      dark: "black",
      contrastText: "burlywood",
    },
  },
});

export default theme;

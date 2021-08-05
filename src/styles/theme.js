import { createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1de9b6",
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;

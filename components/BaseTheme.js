import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const BaseTheme = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default BaseTheme;

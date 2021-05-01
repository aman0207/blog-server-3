import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useState } from "react";
import { Nav } from "./Nav";

const BaseTheme = ({ children }) => {
  const [darkMode, setdarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Nav changeTheme={setdarkMode} darkMode={darkMode} />
      {children}
    </ThemeProvider>
  );
};

export default BaseTheme;

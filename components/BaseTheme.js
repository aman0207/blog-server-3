import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useState } from "react";
//import { Nav } from "./Nav";
import dynamic from "next/dynamic";
import { white } from "@material-ui/core/colors";
const Nav = dynamic(() => import("./Nav"), {
  ssr: false,
});

const BaseTheme = ({ children }) => {
  const [darkMode, setdarkMode] = useState(false);
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: white,
    },
  });

  const lightTheme = createMuiTheme({});

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Nav changeTheme={setdarkMode} darkMode={darkMode} />
      {children}
    </ThemeProvider>
  );
};

export default BaseTheme;

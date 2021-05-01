import BaseTheme from "../components/BaseTheme";
import { Nav } from "../components/Nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <BaseTheme>
      <Component {...pageProps} />
    </BaseTheme>
  );
}

export default MyApp;

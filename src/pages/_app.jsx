import GlobalStyles from '../styles/global-styles';
import { AppInitialProps } from 'next/app';
import '../../public/fonts/styles.css';

import { ThemeProvider } from 'styled-components';
import { Navbar } from '../components/Navbar';
import UsePersistedState from '../utils/UsePersistedState';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = UsePersistedState('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = AppInitialProps;

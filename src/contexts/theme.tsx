'use client';

import React, { PropsWithChildren, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { Theme } from '@hooks/useThemeContext';
import { darkTheme, lightTheme } from '@theme/index';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';
import GlobalStyle from 'styles/global';
import Box from '@components/Basic/Box';

const ThemeContext = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState(false);
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  const theme = darkMode ? darkTheme : lightTheme;

  // @TODO: ask Grisha
  // useServerInsertedHTML(() => {
  //   const styles = styledComponentsStyleSheet.getStyleElement();
  //   // @ts-ignore
  //   styledComponentsStyleSheet.instance.clearTag();
  //   return <>{styles}</>;
  // });

  // if (typeof window !== 'undefined') return <>{children}</>;

  // console.log('Here 🥲', theme.default.background);

  return (
    <Theme.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Box bg={theme.default.background}>{children}</Box>
      </ThemeProvider>
    </Theme.Provider>
    // <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
    // </StyleSheetManager>
  );
};

export default ThemeContext;

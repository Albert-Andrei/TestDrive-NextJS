'use client';

import { Grid } from '@components/Basic/Grid';
import Sidebar from '@components/Sidebar';
import ThemeContext from 'contexts/theme';
import { useEffect } from 'react';
import styled, { useTheme } from 'styled-components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();

  return (
    <html lang="en">
      <body>
        <ThemeContext>
          <Grid
            position="relative"
            gridGap={[1, 2]}
            gridTemplateColumns={['100%', '80px auto']}
            p={['0px 20px', '20px']}
          >
            <Sidebar />
            {children}
          </Grid>
        </ThemeContext>
      </body>
    </html>
  );
}

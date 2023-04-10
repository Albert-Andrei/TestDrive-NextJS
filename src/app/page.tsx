'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import styled, { useTheme } from 'styled-components';
import { useThemeContext } from '@hooks/useThemeContext';
import { useRef } from 'react';
import Flex from '@components/Basic/Flex';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const theme = useTheme();
  const { darkMode, setDarkMode } = useThemeContext();

  return <Main></Main>;
}

const Main = styled.main`
  width: 100%;
  height: 200vh;
  background-color: blue;
`;

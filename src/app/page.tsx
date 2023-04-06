'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import styled, { useTheme } from 'styled-components';
import { useThemeContext } from '@hooks/useThemeContext';
import { useRef } from 'react';
import Flex from '@components/Basic/Flex';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const theme = useTheme();
  const { darkMode, setDarkMode } = useThemeContext();
  // console.log('Opaaa ', theme?.default.background, darkMode);

  const ref = useRef<any>(null);

  const scroll = (value: number) => {
    ref.current.scrollLeft += value;
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <Wrapper ref={ref}>
        {Array.from(Array(10).keys()).map((it, index) => {
          return (
            <Box
              style={{ backgroundColor: index % 2 === 0 ? 'red' : 'blue' }}
            ></Box>
          );
        })}
      </Wrapper>

      <Flex>
        <Test onClick={() => scroll(-500)}>
          <p>Left</p>
        </Test>
        <Test onClick={() => scroll(500)}>
          <p>Right</p>
        </Test>
      </Flex>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}

const Test = styled.button`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.default.background};
  max-width: 100px;
`;

const Wrapper = styled.div`
  background-color: #333;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  width: 500px;
  height: 300px;
  scroll-behavior: smooth;
`;

const Box = styled.div`
  background: red;
  display: inline-block;
  width: 500px;
  height: 350px;
`;

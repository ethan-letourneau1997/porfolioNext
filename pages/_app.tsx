import {
  Affix,
  AppShell,
  Box,
  ColorScheme,
  ColorSchemeProvider,
  Footer,
  Header,
  MantineProvider,
  rem,
  useMantineTheme,
} from '@mantine/core';
import NextApp, { AppContext, AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import '../styles/global.css';

import Head from 'next/head';
import { Inter } from 'next/font/google';

import { Notifications } from '@mantine/notifications';
import { useState } from 'react';

import { useRouter } from 'next/router';
import { NavHeader } from '../components/Navigation';
import { LinkFooter } from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const theme = useMantineTheme();

  const lightModeBg = '#f2f2f2';

  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>Ethan Letourneau</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          withCSSVariables
          theme={{
            fontFamily: inter.style.fontFamily,
            colorScheme,
            // eslint-disable-next-line @typescript-eslint/no-shadow
            globalStyles: (theme) => ({
              body: {
                ...theme.fn.fontStyles(),
                backgroundColor: theme.colorScheme === 'dark' ? lightModeBg : lightModeBg,
                color: theme.colorScheme === 'dark' ? theme.colors.gray[2] : theme.black,
                lineHeight: theme.lineHeight,
              },
            }),
            colors: {},
            components: {
              Accordian: {
                defaultProps: {},
              },
            },
          }}
        >
          <AppShell
            mih="100vh"
            fixed={false}
            styles={{
              main: {
                padding: 0,
              },
            }}
            sx={{ display: 'flex', flexDirection: 'column' }}
            header={
              <Header
                withBorder={false}
                sx={() => ({
                  backgroundColor: theme.colorScheme === 'dark' ? lightModeBg : 'transparent',
                })}
                height="100%"
              >
                <NavHeader />
              </Header>
            }
            footer={
              <Footer
                withBorder={false}
                height="100%"
                sx={{
                  backgroundClip: 'transparent',
                }}
              >
                <LinkFooter />
              </Footer>
            }
          >
            <Box mih={asPath === '/' ? 'calc(100vh - 135px)' : 'calc(100vh - 364px)'}>
              <Affix position={{ bottom: rem(20), left: rem(20) }}>{/* <SideLinks /> */}</Affix>

              <Component {...pageProps} />
            </Box>
          </AppShell>
          <Notifications />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};

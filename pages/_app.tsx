import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  Container,
  Footer,
  Header,
  MantineProvider,
} from '@mantine/core';
import NextApp, { AppContext, AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
// `pages/_app.js`
import '../styles/global.css';

import Head from 'next/head';
import { Inter } from 'next/font/google';

import { Notifications } from '@mantine/notifications';
import { useState } from 'react';
import { NavHeader } from '../components/Navigation';
import { LinkFooter } from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: inter.style.fontFamily,
            colorScheme,
            globalStyles: (theme) => ({
              body: {
                ...theme.fn.fontStyles(),
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
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
            fixed={false}
            header={
              <Header
                withBorder={false}
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                })}
                height={60}
              >
                <NavHeader />
              </Header>
            }
            footer={
              <Footer
                withBorder={false}
                height={60}
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                })}
              >
                <LinkFooter />
              </Footer>
            }
          >
            <Container size="lg" py="xl" mih="calc(100vh - 156px)">
              <Component {...pageProps} />
            </Container>
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

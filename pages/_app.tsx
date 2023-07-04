import { AppShell, Box, Footer, Header, MantineProvider } from '@mantine/core';
import NextApp, { AppContext, AppProps } from 'next/app';

import '../styles/global.css';

import Head from 'next/head';
import { Inter } from 'next/font/google';

import { Notifications } from '@mantine/notifications';

import { NavHeader } from '../components/Navigation/navigation';
import { LinkFooter } from '../components/Footer/footer';

const inter = Inter({ subsets: ['latin'] });

export default function App(props: AppProps & {}) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Ethan Letourneau</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Ethan Letourneau Web Devloper Portfolio Site." />
        <link rel="icon" href="/svg/favicon.svg" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
        theme={{
          fontFamily: inter.style.fontFamily,

          globalStyles: (theme) => ({
            body: {
              ...theme.fn.fontStyles(),
              color: theme.black,
              lineHeight: theme.lineHeight,
              backgroundColor: '#f2f2f2',
            },
          }),
          colors: {
            link: ['#0066CC'],
            darker: ['hsl(359, 100%, 0%)'],
          },
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
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          header={
            <Header withBorder={false} height="100%">
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
          <Box>
            <Component {...pageProps} />
          </Box>
        </AppShell>
        <Notifications />
      </MantineProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
  };
};

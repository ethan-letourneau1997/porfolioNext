import { AppShell, Box, Footer, Header, MantineProvider } from '@mantine/core';
import NextApp, { AppContext, AppProps } from 'next/app';

import '../styles/global.css';

import Head from 'next/head';
import { Inter } from 'next/font/google';

import { Notifications } from '@mantine/notifications';

import { useRouter } from 'next/router';
import { NavHeader } from '../components/Navigation/navigation';
import { LinkFooter } from '../components/Footer/footer';

const inter = Inter({ subsets: ['latin'] });

export default function App(props: AppProps & {}) {
  const { Component, pageProps } = props;

  const lightModeBg = '#f2f2f2';

  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>Ethan Letourneau</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Ethan Letourneau Web Devloper Portfolio Site." />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
        theme={{
          fontFamily: inter.style.fontFamily,

          // eslint-disable-next-line @typescript-eslint/no-shadow
          globalStyles: (theme) => ({
            body: {
              ...theme.fn.fontStyles(),
              lightModeBg,
              color: theme.black,
              lineHeight: theme.lineHeight,
            },
          }),
          colors: {
            link: ['#0066CC'],
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
          sx={{ display: 'flex', flexDirection: 'column' }}
          header={
            <Header
              withBorder={false}
              sx={() => ({
                backgroundColor: 'transparent',
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

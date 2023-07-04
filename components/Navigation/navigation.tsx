import { Anchor, Box, Center, Container, Flex, Header, Title } from '@mantine/core';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { SectionHeader } from '../SectionHeader/section-header';
import { DesktopNavLinks } from './desktop-nav-links';
import { MobileNavDrawer } from './mobile-nav-drawer';

export function NavHeader() {
  const { asPath } = useRouter();

  const sectionTitle = asPath.replace(/\//g, '').charAt(0).toUpperCase() + asPath.slice(2);

  let headerDescription = '';

  if (asPath === '/projects') {
    headerDescription = 'A selection of my projects.';
  } else if (asPath === '/skills') {
    headerDescription = 'The technologies I am proficient in.';
  } else if (asPath === '/contact') {
    headerDescription = 'How to get in touch with me.';
  }

  return (
    <Box bg="darker.0">
      <Header bg="darker.0" withBorder={false} height={70} px="md">
        <Container size="lg" pt={20}>
          <Flex mx="2vw" justify="space-between" sx={{ height: '100%' }}>
            <Center>
              <Anchor c="dark.0" underline={false} component={Link} href="/">
                <Title c="dark.0" size="h4">
                  Ethan Letourneau
                </Title>
              </Anchor>
            </Center>
            <Box>
              <DesktopNavLinks />

              <MobileNavDrawer />
            </Box>
          </Flex>
        </Container>
      </Header>
      {asPath !== '/' && <SectionHeader description={headerDescription} title={sectionTitle} />}
    </Box>
  );
}

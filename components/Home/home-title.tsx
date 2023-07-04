import {
  Box,
  Container,
  Center,
  Flex,
  AspectRatio,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { CldImage } from 'next-cloudinary';
import useStyles from './home.styles';

export function HomeTitle() {
  // theme
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Box bg="darker.0" pb={80} pt={50}>
      <Container size="lg">
        <Center>
          <Flex direction="column" align="center">
            <AspectRatio ratio={1 / 1} w={150}>
              <Box pos="relative">
                <Box w={175} h={175}>
                  <CldImage
                    style={{ borderRadius: '50%' }}
                    fill
                    quality={65}
                    alt="Ethan Letourneau Photograph"
                    src="portfolio/headshotZoomMD_pe3gvh.png"
                  />
                </Box>
              </Box>
            </AspectRatio>
            <Title mt="md" c="gray.0" ml="-.3vw" align="start" fw={600} className={classes.title}>
              Hi, I&apos;m Ethan
            </Title>
            <Text
              fw={300}
              className={classes.subTitle}
              // c="gray.4"
              c={theme.fn.darken(theme.colors.gray[4], 0.05)}
            >
              I make websites, work with data, and more.
            </Text>
            <Text
              fz="md"
              align="center"
              maw={420}
              fw={400}
              className={classes.postTitle}
              // c="dark.2"
              c={theme.fn.darken(theme.colors.dark[2], 0.18)}
            >
              A recent graduate working every day to grow. Looking for somehwere to make an impact.
            </Text>
          </Flex>
        </Center>
      </Container>
    </Box>
  );
}

import { Box, Container, Center, Flex, AspectRatio, Text, Title } from '@mantine/core';
import { CldImage } from 'next-cloudinary';
import useStyles from './home.styles';

export function HomeTitle() {
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
            <Title mt="md" c="gray.2" ml="-.3vw" align="start" fw={600} className={classes.title}>
              Hi, I&apos;m Ethan
            </Title>
            <Text className={classes.subTitle} c="gray.4">
              I make websites, work with data, and more.
            </Text>
            <Text
              fz="md"
              align="center"
              maw={500}
              fw={500}
              className={classes.postTitle}
              c="dimmed"
            >
              A recent graduate working every day to grow. Looking for somehwere to make an impact.
            </Text>
          </Flex>
        </Center>
      </Container>
    </Box>
  );
}

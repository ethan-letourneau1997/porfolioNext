import { Container, Title, Text, Box, Center } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

// const raleway = Raleway({ subsets: ['latin'] });
// const openSans = Open_Sans({ subsets: ['latin'] });
// const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] });

interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  // responsive styles
  const mobile = useMediaQuery('(max-width: 30em)');
  const tablet = useMediaQuery('(max-width: 48em)');

  //theme
  // const theme = useMantineTheme();

  return (
    <Container mt={30} size="lg" pt={20} pb={70}>
      <Center>
        <Box mx="2vw">
          <Title
            align="center"
            c="white"
            fw={700}
            size={tablet ? 30 : 45}
            sx={
              {
                // borderBottom: '1.5px solid black',
                // width: 'fit-content',
              }
            }
          >
            {title}
          </Title>

          <Text mt={5} fw={400} size={mobile ? 'md' : 'lg'} c="gray.3">
            {description}
          </Text>
        </Box>
      </Center>
    </Container>
  );
}

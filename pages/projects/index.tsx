import {
  Text,
  useMantineTheme,
  Center,
  Grid,
  Image,
  SimpleGrid,
  Title,
  Stack,
  Button,
  Flex,
  Box,
  Card,
  Tooltip,
  Paper,
} from '@mantine/core';
import { BiFilm } from 'react-icons/bi';
import Link from 'next/link';
import { Alfa_Slab_One } from 'next/font/google';
import { HiDesktopComputer } from 'react-icons/hi';
import { RiGithubFill } from 'react-icons/ri';
import { ReactNode } from 'react';
import { SiCss3, SiDjango, SiHtml5, SiNextdotjs, SiPostgresql, SiReact } from 'react-icons/si';
import { useMediaQuery } from '@mantine/hooks';
import { IconApi } from '@tabler/icons-react';
import { FaAws, FaSass } from 'react-icons/fa';
import {
  BootstrapIcon,
  MantineIcon,
  NextIcon,
  PythonIcon,
  TypeScriptIcon,
} from '../../components/skillIcons/webdevIcons';
import { SectionHeader } from '../../components/sectionHeader';

const alfa = Alfa_Slab_One({ subsets: ['latin'], weight: '400' });

interface ProjectItemProps {
  title: string;
  content: string;
  titleColor: string;
}

function ProjectItem({ title, titleColor, content }: ProjectItemProps) {
  // styles

  const tablet = useMediaQuery('(max-width: 48em)');

  return (
    <Stack spacing={tablet ? 5 : 'xs'} px="md">
      <Title size={tablet ? 'h4' : 'h3'} align="center" c={titleColor}>
        {title}
      </Title>
      <Text fz={tablet ? 'sm' : 'md'} align="center">
        {content}
      </Text>
    </Stack>
  );
}

interface ProjectButtonsProps {
  siteUrl: string;
  codeUrl: string;
}

function Projectbuttons({ siteUrl, codeUrl }: ProjectButtonsProps) {
  const theme = useMantineTheme();

  // responsive styles
  const tablet = useMediaQuery('(max-width: 48em)');
  const desktop = useMediaQuery('(min-width: 74em)');

  return (
    <Flex justify="center" gap="xl" pt={tablet ? 0 : 'xl'} mt={desktop ? 'xl' : 'md'}>
      <SimpleGrid cols={2} spacing="xl">
        <Button
          fz={tablet ? 'md' : 'lg'}
          rightIcon={<RiGithubFill size={tablet ? 18 : 20} />}
          color={theme.colorScheme === 'dark' ? 'gray.3' : 'cyan.7'}
          variant={theme.colorScheme === 'dark' ? 'outline' : 'outline'}
          size={tablet ? 'sm' : 'md'}
          component={Link}
          href={siteUrl}
        >
          Site
        </Button>
        <Button
          fz={tablet ? 'md' : 'lg'}
          rightIcon={<HiDesktopComputer size={tablet ? 18 : 20} />}
          color={theme.colorScheme === 'dark' ? 'gray.3' : 'cyan.7'}
          variant={theme.colorScheme === 'dark' ? 'outline' : 'outline'}
          size={tablet ? 'sm' : 'md'}
          component={Link}
          href={codeUrl}
        >
          Code
        </Button>
      </SimpleGrid>
    </Flex>
  );
}

interface ProjectSkillColProps {
  icon: ReactNode;
  name?: string;
}

function ProjectSkillCol({ icon, name }: ProjectSkillColProps) {
  // theme
  const theme = useMantineTheme();
  return (
    <Tooltip label={name}>
      <Card shadow="xs" bg={theme.colorScheme === 'dark' ? 'gray.9' : 'gray.0'}>
        <Center>{icon}</Center>
      </Card>
    </Tooltip>
  );
}

export default function Projects() {
  // styles
  const mobile = useMediaQuery('(max-width: 30em)');
  const tablet = useMediaQuery('(max-width: 48em)');
  const desktop = useMediaQuery('(min-width: 74em)');

  // theme
  const theme = useMantineTheme();

  let iconSize;
  if (desktop) {
    iconSize = 35;
  } else {
    iconSize = 30;
  }
  return (
    <Box pb={50}>
      <SectionHeader title="Projects" />
      <Paper
        radius="md"
        shadow={theme.colorScheme === 'dark' ? 'none' : 'sm'}
        p="xl"
        mt={40}
        bg={theme.colorScheme === 'dark' ? 'dark.8' : 'white'}
      >
        <Center mt="sm">
          <BiFilm color={theme.colors.yellow[5]} size={35} />
          <Text c="yellow.5" fz={35} fw={800} component={Link} href="">
            CinegraphTV
          </Text>
        </Center>
        <Grid mt={30} justify="center">
          <Grid.Col span={12} xs={9} sm={8} md={7} lg={6}>
            <Image src="https://res.cloudinary.com/eletourneau/image/upload/v1688024339/cinegraph_l2tg6d.png" />
          </Grid.Col>
          <Grid.Col span={12} md={8} lg={6} pt={desktop ? 0 : 'xl'}>
            <Stack align="stretch">
              <SimpleGrid cols={mobile ? 1 : 2} spacing={desktop ? 'md' : 'xl'}>
                <ProjectItem
                  title="Search"
                  titleColor={theme.colors.red[6]}
                  content="Find movies, tv, and stars easily with  autocomplete search."
                />
                <ProjectItem
                  title="API"
                  titleColor={theme.colors.blue[6]}
                  content="Retrievs and displays data from the TMDB API."
                />
                <ProjectItem
                  title="Made With"
                  titleColor={theme.colors.yellow[6]}
                  content="Next.js, React,Typescript, Fetch API, HTML, SASS, Mantine."
                />
                <ProjectItem
                  title="Coming Soon"
                  titleColor={theme.colors.green[6]}
                  content="Login and authentication using your TMDB account. The ability to rate, review, and save movies to your user profile."
                />
              </SimpleGrid>
              <Projectbuttons siteUrl="#" codeUrl="#" />
              <Box mt="xl" display={tablet ? 'none' : 'block'}>
                <Flex align="center" mt="sm" gap="sm" direction="column">
                  <Box>
                    <Text mb="xs">Built With</Text>
                    <Flex gap="sm">
                      {theme.colorScheme === 'dark' ? (
                        <ProjectSkillCol icon={<NextIcon size={iconSize} />} name="Next.js" />
                      ) : (
                        <ProjectSkillCol
                          icon={<SiNextdotjs color="" size={iconSize} />}
                          name="Next.js"
                        />
                      )}
                      <ProjectSkillCol
                        icon={<SiReact color="#61DBFB" size={iconSize} />}
                        name="React"
                      />
                      <ProjectSkillCol
                        icon={<TypeScriptIcon size={iconSize} />}
                        name="TypeScript"
                      />
                      <ProjectSkillCol icon={<IconApi size={iconSize} />} name="Fetch API" />
                      <ProjectSkillCol
                        icon={<SiHtml5 color="#f06529" size={iconSize} />}
                        name="HTML5"
                      />
                      <ProjectSkillCol icon={<FaSass color="#c69" size={iconSize} />} name="SASS" />
                      <ProjectSkillCol icon={<MantineIcon size={iconSize} />} name="Mantine" />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
      <Paper
        shadow={theme.colorScheme === 'dark' ? 'none' : 'sm'}
        bg={theme.colorScheme === 'dark' ? 'dark.8' : 'white'}
        p="xl"
        mt={desktop ? 60 : 60}
      >
        <Center mt="sm">
          {/* <PiBasketball size={30} color="#EB6047" /> */}
          <Text
            sx={{
              fontFamily: alfa.style.fontFamily,
            }}
            c="#EB6047"
            fz={35}
            fw={800}
            component={Link}
            href=""
          >
            MARCH MADNESS
          </Text>
        </Center>
        <Grid mt={30} justify="center">
          {!desktop && (
            <Grid.Col span={12} xs={9} sm={8} md={7} lg={6}>
              <Image src="https://res.cloudinary.com/eletourneau/image/upload/v1688024333/march-madness-duo_xrt9on.png" />
            </Grid.Col>
          )}
          <Grid.Col span={12} md={8} lg={6} pt={desktop ? 0 : 'xl'}>
            <Stack align="stretch">
              <SimpleGrid cols={mobile ? 1 : 2} spacing={desktop ? 'md' : 'xl'}>
                <ProjectItem
                  title="Draft"
                  titleColor={theme.colors.red[6]}
                  content="Handles the draft logic while users select out of the entire pool of march madness players."
                />
                <ProjectItem
                  title="Standings"
                  titleColor={theme.colors.blue[6]}
                  content="Users can see their up-to-date standings within their group and against all other users."
                />
                <ProjectItem
                  title="Scalability"
                  titleColor={theme.colors.yellow[6]}
                  content="Groups of up to ten users draft out of their own pool of players. This creates an endless player pool."
                />
                <ProjectItem
                  title="Made With"
                  titleColor={theme.colors.green[6]}
                  content="Django, Postgres, Python, AWS, Bootstrap, HTML, CSS"
                />
              </SimpleGrid>
              <Projectbuttons siteUrl="#" codeUrl="#" />
              <Box mt="xl" display={tablet ? 'none' : 'block'}>
                <Flex align="center" mt="sm" gap="sm" direction="column">
                  <Box>
                    <Text mb="xs">Built With</Text>

                    <Flex gap="sm">
                      <ProjectSkillCol
                        icon={<SiDjango color="#2BA977" size={iconSize} />}
                        name="Django"
                      />
                      <ProjectSkillCol
                        icon={<SiPostgresql color="#228be6" size={iconSize} />}
                        name="PostgresSQL"
                      />
                      <ProjectSkillCol icon={<FaAws color="" size={iconSize} />} name="AWS" />
                      <ProjectSkillCol icon={<PythonIcon size={iconSize} />} name="Python" />
                      <ProjectSkillCol icon={<BootstrapIcon size={iconSize} />} name="Bootstrap" />
                      <ProjectSkillCol
                        icon={<SiHtml5 color="#f06529" size={iconSize} />}
                        name="HTML5"
                      />
                      <ProjectSkillCol
                        icon={<SiCss3 color="#2965F1" size={iconSize} />}
                        name="CSS3"
                      />
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Stack>
          </Grid.Col>
          {desktop && (
            <Grid.Col span={12} xs={9} sm={8} md={7} lg={6}>
              <Image src="/march-madness-duo.png" />
            </Grid.Col>
          )}
        </Grid>
      </Paper>
    </Box>
  );
}

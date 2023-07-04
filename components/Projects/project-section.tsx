import {
  useMantineTheme,
  Box,
  Title,
  Anchor,
  Space,
  AspectRatio,
  Paper,
  Text,
} from '@mantine/core';
import { CldImage } from 'next-cloudinary';
import useStyles from './project.styles';

interface ProjectSectionProps {
  imgPath: string;
  titleLeft: string;
  titleRight: string;
  titleURL: string;
  description: string;
  builtWith: string;
  repoLink: string;
  placeholderColor: string;
}

export function ProjectSection({
  imgPath,
  titleLeft,
  titleRight,
  titleURL,
  description,
  builtWith,
  repoLink,
  placeholderColor,
}: ProjectSectionProps) {
  // theme
  const theme = useMantineTheme();
  // styles
  const { classes } = useStyles();

  return (
    <Box>
      <Box px="2vw" className={classes.itemDetails}>
        <Title className={classes.title} fw={650}>
          <Anchor target="_blank" href={titleURL}>
            {titleLeft}:&nbsp;
          </Anchor>{' '}
          {titleRight}
        </Title>

        <Text className={classes.description} fz="lg" mt="sm" c="dark.5" fw={500}>
          {description}
        </Text>
        <Text className={classes.description} fz="lg" mt="xl" c="dark.5" fw={500}>
          Built With: {builtWith}
        </Text>
        <Space h={20} />
        <Text fw={500} c="dark.4" span>
          Take a look at&nbsp;
        </Text>
        <Anchor color="link.0" target="_blank" href={repoLink} fw={500}>
          my code&nbsp;&rarr;
        </Anchor>
      </Box>
      <AspectRatio ratio={2880 / 1560} pos="relative">
        <Paper
          mx="2vw"
          className={classes.projectImage}
          mt={30}
          shadow="md"
          radius="xs"
          withBorder
          pos="relative"
        >
          <CldImage fill alt={`Picture of ${titleLeft} Project`} src={imgPath} quality={10} />
          <Paper h="100%" w="100%" bg={placeholderColor} sx={{ borderRadius: theme.radius.xs }} />
        </Paper>
      </AspectRatio>
    </Box>
  );
}

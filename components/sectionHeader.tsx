import { useMantineTheme, Title, Divider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  // styles

  const tablet = useMediaQuery('(max-width: 48em)');

  //theme
  const theme = useMantineTheme();

  return (
    <>
      <Title size={tablet ? 30 : 35}>{title}</Title>
      <Divider my="md" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.5'} />
    </>
  );
}

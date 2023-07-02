import { Tooltip, Anchor, Paper } from '@mantine/core';
import { ReactNode } from 'react';

interface LinkIconProps {
  hoverText: string;
  bgColor?: string;
  icon: ReactNode;
  linkHref: string;
}

export function LinkIcon({ hoverText, icon, bgColor, linkHref }: LinkIconProps) {
  return (
    <Tooltip label={hoverText}>
      <Anchor href={linkHref} target="_blank">
        <Paper
          h={40}
          w={40}
          shadow="xs"
          bg={bgColor || ''}
          c="white"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Paper>
      </Anchor>
    </Tooltip>
  );
}

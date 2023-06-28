import { Anchor, Center, Group } from '@mantine/core';

import { BiLogoLinkedin } from 'react-icons/bi';
import { GithubIcon } from '@mantine/ds';
import { SiGmail } from 'react-icons/si';
import { IoIosPaper } from 'react-icons/io';

export function LinkFooter() {
  return (
    <Center>
      <Group align="flex-end" spacing="lg">
        <Anchor>
          <GithubIcon color="#37b24d" size={26} style={{ marginBottom: 3 }} />
        </Anchor>
        <Anchor>
          <BiLogoLinkedin color="#0077b5" size={35} />
        </Anchor>
        <Anchor>
          <SiGmail color="#f03e3e" size={28} />
        </Anchor>

        <Anchor>
          <IoIosPaper color="#fab005" size={28} />
        </Anchor>
      </Group>
    </Center>
  );
}

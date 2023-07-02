import { Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

export function ImageTabs() {
  return (
    <>
      <Carousel mx="2vw" loop>
        <Carousel.Slide bg="red">
          <Image radius="xs" src="cinegraphNoDevice.png" />
        </Carousel.Slide>
        <Carousel.Slide bg="blue">
          <Image radius="xs" src="mmNoDevice.png" />
        </Carousel.Slide>
        <Carousel.Slide bg="green">3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </>
  );
}

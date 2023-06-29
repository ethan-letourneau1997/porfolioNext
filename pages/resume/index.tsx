import { Box } from '@mantine/core';
import { SectionHeader } from '../../components/sectionHeader';
// import { useMediaQuery } from '@mantine/hooks';

export default function Resume() {
  // const resumePDF = '/ethan_letourneau_resume.pdf';

  // styles
  // const mobile = useMediaQuery('(max-width: 30em)');
  // const tablet = useMediaQuery('(max-width: 48em)');
  // const desktop = useMediaQuery('(min-width: 74em)');

  // let aspectRatio;
  // if (mobile) {
  //   aspectRatio = 2 / 1;
  // } else if (tablet) {
  //   aspectRatio = 2 / 2.65;
  // } else {
  //   aspectRatio = 2 / 2.5;
  // }

  return (
    <Box m={-10}>
      <SectionHeader title="Resume" />
      {/* <Container size="md"> */}
      {/* <AspectRatio ratio={2 / 2.6}>
          <iframe src={resumePDF}></iframe>
        </AspectRatio> */}
      {/* <AspectRatio ratio={aspectRatio}> */}
      <iframe
        title="Ethan Letourneau PDF"
        src="https://drive.google.com/file/d/12rbXGG4UlniWVrHgxqYtEC3FBE2lmHt5/preview"
        width="100%"
        height="auto"
        style={{ minHeight: '60vh', border: 'none' }}
        allow="autoplay"
      />
      {/* <object
        data={resumePDF}
        // style={{
        //   minHeight: '60vh',
        // }}
        type="application/pdf"
        width="100%"
        style={{
          minHeight: '100vh',
        }}
      >
        <p>
          Unable to display PDF file.
          <a href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">
            Download
          </a>
          instead.
        </p>
      </object> */}
      {/* </AspectRatio> */}
      {/* </Container> */}
    </Box>
  );
}

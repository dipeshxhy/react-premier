import Alphabets from './Alphabets';
import Gallery from './Gallery';
import ImageMarque from './ImageMarque';
import TextMarquee from './TextMarquee';
import Update from './Update';
import Video from './Video';

const Main = () => {
  return (
    <main>
      <Video />
      <ImageMarque/>
      <Alphabets/>
      <Gallery/>
      <Update/>
      <TextMarquee/>
    </main>
  );
};

export default Main;

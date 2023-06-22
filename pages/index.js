import Head from 'next/head';
import ArtCarousel from '../components/art/ArtCarousel';

function Home() {
  return (
    <>
      <Head><title>Stay Gold, Cowboy</title></Head>
      <div className="pt-10">
        <h1>Stay Gold, Cowboy</h1>
      </div>
      <div className="pt-10">
        <ArtCarousel />
      </div>
    </>
  );
}

export default Home;

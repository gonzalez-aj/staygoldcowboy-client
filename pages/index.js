import Head from 'next/head';
import ArtCarousel from '../components/art/ArtCarousel';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  return (
    <>
      <Head><title>Stay Gold, Cowboy</title></Head>
      <div className="pt-10 text-5xl">
        <h1>Stay Gold, Cowboy</h1>
      </div>
      <div className="pt-1 text-2xl">
        <h1>You too, {user.first_name} {user.last_name} </h1>
      </div>
      <div className="pt-10">
        <ArtCarousel />
      </div>
    </>
  );
}

export default Home;

import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import ArtCard from '../components/art/ArtCard';
import { getArts } from '../utils/data/artData';

function Home() {
  const { user } = useAuth();
  const [arts, setArts] = useState([]);
  const [noArts, setNoArts] = useState(false);
  const router = useRouter();

  const getAllTheArts = () => {
    getArts(user.uid)
      .then((data) => {
        if (data && data.length > 0) {
          setNoArts(false);
          setArts(data);
        } else {
          setNoArts(true);
          setArts([]);
        }
      })
      .catch(() => {
        setArts(true);
      });
  };

  useEffect(() => {
    getAllTheArts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Head><title>Stay Gold, Cowboy</title></Head>
      <div className="pt-10 text-5xl">
        <h1>Stay Gold, Cowboy</h1>
      </div>
      <div className="pt-1 text-2xl">
        <h1>You too, {user.first_name} {user.last_name} </h1>
      </div>
      <Button onClick={() => {
        router.push('/arts/new');
      }}
      >
        Add Art
      </Button>
      {noArts && <h4>There&apos;s no art here yet</h4>}
      <div className="text-center my-4 night">
        <div className="flex around flex-wrap">
          {arts.map((art) => (
            <section key={`art--${art.id}`} className="art-card">
              <ArtCard
                id={art.id}
                title={art.title}
                creationDate={art.creation_date}
                imageUrl={art.image_url}
                uid={art.fan_id?.uid}
                onUpdate={getAllTheArts}
              />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

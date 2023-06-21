import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';
import { getArts } from '../utils/data/artData';
import ArtCarousel from '../components/art/ArtCarousel';

function Home() {
  const { user } = useAuth();
  const [arts, setArts] = useState([]);
  const [noArts, setNoArts] = useState(false);

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
      {noArts && <h4>There&apos;s no art here yet</h4>}
      <div className="pt-10">
        <div className="carousel carousel-center rounded-box">
          {arts.map((art) => (
            <section key={`art--${art.id}`}>
              <ArtCarousel
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

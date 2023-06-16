import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';
import ArtCard from '../components/art/ArtCard';
import { getArts } from '../utils/data/artData';

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
      <br />
      <h2> Welcome Partner, {user.first_name} {user.last_name} </h2>
      <h5>Here&apos;s the art:</h5>
      {noArts && <h4>There&apos;s no art here yet</h4>}
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
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

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';
import getArts from '../utils/data/artData';
import ArtCard from '../components/art/ArtCard';

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
  }, [user]);

  return (
    <>
      <Head><title>Stay Gold, Cowboy</title></Head>
      <br />
      <h2> Welcome to Partner, {user.full_name} </h2>
      <h3>Here&apos;s the art:</h3>
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

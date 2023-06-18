import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getArtsByTag, getSingleTag } from '../../utils/data/tagData';
import ArtCard from '../../components/art/ArtCard';

export default function ViewArtByTag() {
  const router = useRouter();
  const { id } = router.query;
  const [artByTags, setArtByTags] = useState([]);
  const [tag, setTag] = useState(null);

  const getAllArtByTags = () => {
    getArtsByTag(id).then((response) => setArtByTags(response));
  };

  const getThatTag = () => {
    getSingleTag(id).then((response) => setTag(response));
  };

  useEffect(() => {
    getAllArtByTags();
    getThatTag();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Head>
        <title>All {tag?.medium} Art</title>
      </Head>
      <br />
      <div className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">
        All Art Tagged with #{tag?.medium}
      </div>
      <br />
      <div className="flex flex-wrap">
        {artByTags.length > 0 ? (
          artByTags.map((art) => (
            <section key={`art--${art.id}`} className="art-card">
              <ArtCard
                id={art.id}
                title={art.title}
                creationDate={art.creation_date}
                imageUrl={art.image_url}
                uid={art.fan_id?.uid}
              />
            </section>
          ))
        ) : (
          <h4>No Art Tagged with #{tag?.medium} yet</h4>
        )}
      </div>
    </>
  );
}

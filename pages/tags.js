import { useEffect, useState } from 'react';
import Head from 'next/head';
import getTags from '../utils/data/tagData';
import TagCard from '../components/tags/TagCard';

function ShowTags() {
  const [tags, setTags] = useState([]);

  const getAllTheTags = () => {
    getTags()
      .then((data) => setTags(data))
      .catch((err) => console.warn('no tags for you', err));
  };

  useEffect(() => {
    getAllTheTags();
  }, []);

  return (
    <>
      <Head><title>Tags</title></Head>
      <br />
      <h1>Tags</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {tags.map((tag) => (
          <TagCard
            key={tag.id}
            id={tag.id}
            medium={tag.medium}
          />
        ))}
      </div>
    </>
  );
}

export default ShowTags;

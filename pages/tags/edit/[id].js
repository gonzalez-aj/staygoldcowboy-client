import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import TagForm from '../../../components/tags/TagForm';
import { getTags } from '../../../utils/data/tagData';

export default function EditTag() {
  const [tag, setTag] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getTags().then(setTag);
  }, [id]);

  return (
    <>
      <Head>
        <title>Edit {`${tag.medium}`}</title>
      </Head>
      <TagForm tagObj={tag} />
    </>
  );
}

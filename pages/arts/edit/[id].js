import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getSingleArt } from '../../../utils/data/artData';
import ArtForm from '../../../components/art/ArtForm';
import { useAuth } from '../../../utils/context/authContext';

export default function EditArt() {
  const [art, setArt] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  useEffect(() => {
    getSingleArt(id).then(setArt);
  }, [id]);

  return (
    <>
      <Head>
        <title>Edit {`${art.title}`}</title>
      </Head>
      <ArtForm obj={art} user={user} />
    </>
  );
}

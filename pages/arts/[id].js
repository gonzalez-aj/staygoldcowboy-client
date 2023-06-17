import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import Head from 'next/head';
import { getSingleArt } from '../../utils/data/artData';
import ArtCard from '../../components/art/ArtCard';

export default function ViewArtsDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [artDetails, setArtDetails] = useState({});

  const getOneArt = () => {
    getSingleArt(id).then((setArtDetails));
  };

  useEffect(() => {
    getOneArt();
  }, [id]);

  return (
    <>
      {console.warn(artDetails)}
      <ArtCard
        id={artDetails.id}
        title={artDetails.title}
        creationDate={artDetails.creation_date}
        imageUrl={artDetails.image_url}
      />
      <p>Tags by tag: {artDetails.tag}</p>
      <Head>
        <title>View {artDetails.title}</title>
      </Head>
      <h1>Art Deets</h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Card.Img src={artDetails.image_url} alt={artDetails.title} className="xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title" id="font-white">{artDetails.title}</h2>
          <p className="card-text" id="font-white">Creation Date: {artDetails.creation_date}</p>
          <p className="card-text" id="font-white">Tags by tag_id: {artDetails.tag_id}</p>
          <div className="card-actions">
            <Link href={`/arts/edit/${artDetails.id}`} passHref>
              <Card.Link href="#">Edit</Card.Link>
            </Link>
            <Link href={`/arts/edit/${artDetails.id}`} passHref>
              <Card.Link href="#">Delete</Card.Link>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

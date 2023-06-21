import PropTypes from 'prop-types';
import React from 'react';
// import Link from 'next/link';
import Image from 'next/image';
// import { Card } from 'react-bootstrap';
// import { deleteArt } from '../../utils/data/artData';

export default function ArtCarousel({
  // id,
  title,
  // creationDate,
  imageUrl,
  // onUpdate,
}) {
  // const deleteThisArt = () => {
  //   if (window.confirm(`🛑 Sure you wanna delete ${title}?`)) {
  //     deleteArt(id).then(() => onUpdate());
  //   }
  // };
  return (
    <>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <Image src={imageUrl} alt={title} className="rounded-box" layout="fill" onLoad={(e) => console.warn(e.target.naturalWidth)} />
          {/* <div className="card-actions">
            <Link href={`/arts/${id}`} passHref>
              <Card.Link>Details</Card.Link>
            </Link>
            <Link href={`/arts/edit/${id}`} passHref>
              <Card.Link href="#">Edit</Card.Link>
            </Link>
            <Link href="/" passHref>
              <Card.Link onClick={deleteThisArt}>Delete</Card.Link>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}

ArtCarousel.propTypes = {
  // id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  // creationDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  // onUpdate: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { deleteArt } from '../../utils/data/artData';

export default function ArtCarousel({
  id,
  title,
  // creationDate,
  imageUrl,
  onUpdate,
}) {
  const deleteThisArt = () => {
    if (window.confirm(`🛑 Sure you wanna delete ${title}?`)) {
      deleteArt(id).then(() => onUpdate());
    }
  };
  return (
    <>
      <div className="carousel-item">
        <Image src={imageUrl} alt={title} className="box" height={400} width={400} />
        <div className="card-compact card-actions bg-base-100 flex flex-col flex-grow">
          <Link className="link" href={`/arts/${id}`} passHref>Details </Link>
          <Link className="link" href={`/arts/edit/${id}`} passHref>Edit </Link>
          <Link className="link" href="/" onClick={deleteThisArt} passHref>Delete</Link>
        </div>
      </div>
    </>
  );
}

ArtCarousel.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  // creationDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

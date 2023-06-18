import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import { deleteArt } from '../../utils/data/artData';

export default function ArtCard({
  id,
  title,
  // creationDate,
  imageUrl,
  onUpdate,
}) {
  const deleteThisTag = () => {
    if (window.confirm(`🛑 Sure you wanna delete ${title}?`)) {
      deleteArt(id).then(() => onUpdate());
    }
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Card.Img src={imageUrl} alt={title} className="xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title" id="font-white">{title}</h2>
          {/* <p className="card-text" id="font-white">Creation Date: {creationDate}</p> */}
          <div className="card-actions">
            <Link href={`/arts/${id}`} passHref>
              <Card.Link>Details</Card.Link>
            </Link>
            <Link href={`/arts/edit/${id}`} passHref>
              <Card.Link href="#">Edit</Card.Link>
            </Link>
            <Link href="/" passHref>
              <Card.Link onClick={deleteThisTag}>Delete</Card.Link>
            </Link>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

ArtCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  // creationDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

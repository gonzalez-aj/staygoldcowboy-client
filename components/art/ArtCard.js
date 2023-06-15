import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const ArtCard = ({
  id,
  title,
  creationDate,
  imageUrl,
}) => (
  <Card className="text-center">
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <Link href={`/arts/${id}`} passHref>
        <Card.Title>Created On:{creationDate}</Card.Title>
      </Link>
      <Card.Text> Image URL: {imageUrl}</Card.Text>
      <Card.Img src={imageUrl} alt={title} />
      <Link href={`/arts/edit/${id}`} passHref>
        <Card.Link href="#">Edit</Card.Link>
      </Link><Card.Link href="#">Delete</Card.Link>
    </Card.Body>
    <Card.Footer className="text-muted">Skill Level:</Card.Footer>
  </Card>
);

ArtCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ArtCard;

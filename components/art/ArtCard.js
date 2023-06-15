import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const ArtCard = ({
  title, //
  creationDate,
  imageUrl,
}) => (
  <Card className="text-center">
    <Card.Header>{title}</Card.Header>
    <Card.Body>
      <Card.Title>By:{creationDate}</Card.Title>
      <Card.Text> players needed{imageUrl}</Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Skill Level:</Card.Footer>
  </Card>
);

ArtCard.propTypes = {
  title: PropTypes.string.isRequired,
  creationDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ArtCard;

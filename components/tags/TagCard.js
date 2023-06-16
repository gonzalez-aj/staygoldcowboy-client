import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const TagCard = ({
  id,
  medium,
}) => (
  <Card className="text-center">
    <Card.Header>{medium}</Card.Header>
    <Card.Body>
      <Link href={`/tags/${id}`} passHref>
        <Card.Title>Medium: {medium}</Card.Title>
      </Link>
      <Link href={`/tags/edit/${id}`} passHref>
        <Card.Link href="#">Edit</Card.Link>
      </Link><Card.Link href="#">Delete</Card.Link>
    </Card.Body>
    <Card.Footer className="text-muted">Medium</Card.Footer>
  </Card>
);

TagCard.propTypes = {
  id: PropTypes.number.isRequired,
  medium: PropTypes.string.isRequired,
};

export default TagCard;

import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const TagCard = ({
  id,
  medium,
}) => (
  <>
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{medium}</Card.Title>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Link href={`/tags/edit/${id}`} passHref>
          <Card.Link href="#">Edit</Card.Link>
        </Link><Card.Link href="#">Delete</Card.Link>
      </Card.Footer>
    </Card>
    <br />
  </>
);

TagCard.propTypes = {
  id: PropTypes.number.isRequired,
  medium: PropTypes.string.isRequired,
};

export default TagCard;

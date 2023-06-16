import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TagCard = ({
  id,
  medium,
}) => (
  <>
    <div className="bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          <Button className="btn">
            {medium}
          </Button>
        </h2>
        <div className="card-actions justify-end">
          <Link href={`/tags/edit/${id}`} passHref>
            <Card.Link className="badge badge-info badge-outline">edit</Card.Link>
          </Link>
          <Link href={`/tags/edit/${id}`} passHref>
            <Card.Link className="badge badge-error badge-outline">delete</Card.Link>
          </Link>
        </div>
      </div>
    </div>
    <br />
  </>
);

TagCard.propTypes = {
  id: PropTypes.number.isRequired,
  medium: PropTypes.string.isRequired,
};

export default TagCard;

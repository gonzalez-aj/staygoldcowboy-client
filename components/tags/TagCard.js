import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import { deleteTag } from '../../utils/data/tagData';

export default function TagCard({
  id,
  medium,
  onUpdate,
}) {
  const deleteThisTag = () => {
    if (window.confirm(`🛑 Sure you wanna delete ${medium}?`)) {
      deleteTag(id).then(() => onUpdate());
    }
  };
  return (
    <>
      <div className="bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            <Link href={`/tags/${id}`} passHref>
              <div className="btn">
                #{medium}
              </div>
            </Link>
          </h2>
          <div className="card-actions justify-end">
            <Link href={`/tags/edit/${id}`} passHref>
              <Card.Link className="badge badge-info badge-outline">edit</Card.Link>
            </Link>
            <Link href="/tags" passHref>
              <Card.Link className="badge badge-error badge-outline" onClick={deleteThisTag}>delete</Card.Link>
            </Link>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

TagCard.propTypes = {
  id: PropTypes.number.isRequired,
  medium: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

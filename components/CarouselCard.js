import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

export default function CarouselCard({ artObj }) {
  return (
    <>
      <div>
        <Image
          src={artObj.image_url}
          alt={artObj.title}
          height={300}
          width={300}
        />
        <Carousel.Caption>
          <h3>{artObj.title}</h3>
        </Carousel.Caption>
      </div>
    </>
  );
}

CarouselCard.propTypes = {
  artObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    // creationDate: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};

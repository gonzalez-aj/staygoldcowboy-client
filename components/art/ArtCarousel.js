import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselCard from '../CarouselCard';
import { useAuth } from '../../utils/context/authContext';
import { getArts } from '../../utils/data/artData';

export default function ArtCarousel() {
  const { user } = useAuth();
  const [arts, setArts] = useState([]);
  const [noArts, setNoArts] = useState(false);

  const getAllTheArts = () => {
    getArts(user.uid)
      .then((data) => {
        if (data && data.length > 0) {
          setNoArts(false);
          setArts(data);
        } else {
          setNoArts(true);
          setArts([]);
        }
      })
      .catch(() => {
        setArts(true);
      });
  };

  useEffect(() => {
    getAllTheArts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {noArts && <h4>There&apos;s no art here yet</h4>}
      <Carousel interval={null}>
        {arts.map((art) => (
          <Carousel.Item>
            <CarouselCard key={art.id} artObj={art} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

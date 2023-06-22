import React from 'react';
import { Button } from 'react-bootstrap';

// what is the length of our object of images (ex: obj.length =7)

// Next: take current index  and if >= length, go back to [0], else index + 1; setState: activeSlide = index

// Prev: opposite. If I'm on slide [0], previous should take me to obj.length - 1; setState: activeSlide = index

// add CSS class to active slide (.active). Classes of .slide will have property of display: none;, but .slide.active = display: block.

export default function ScratchCarousel() {
  return (
    <div>
      <Button>Prev</Button>
      {/* map over images */}
      <Button>Next</Button>
    </div>
  );
}

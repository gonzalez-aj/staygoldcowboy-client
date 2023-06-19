import React from 'react';
import { Image } from 'react-bootstrap';
import menalex from '../images/menalex.png';

export default function About() {
  return (
    <>
      <br />
      <div>
        <h1 className="text-5xl">About</h1>
      </div>
      <div>
        <Image src={menalex} alt="Angie and Alex at Musicians Corner" />
      </div>
      <div>
        <p className="max-w-lg text-2xl font-semibold leading-normal text-gray-900 dark:text-white">Hi there. I&apos;m Angie Gonzalez, and I created Stay Gold, Cowboy. This is in honor of our local emosurrealist, activist, artist, prolific, polaroid taking Golden Hatted Cowboy, Sonatore aka Alex Cheng aka Alex Red.  Alex went under many a persona, mysterious, fluid, and still so distinct. He always talked about emosurrealism, and I intend to honor his memory by always talking about it. Nashville misses him greatly. </p>
      </div>
    </>
  );
}

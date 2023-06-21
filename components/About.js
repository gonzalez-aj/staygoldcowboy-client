import React from 'react';
import Image from 'next/image';
import menalex from '../images/menalex.png';

export default function About() {
  return (
    <>
      <h2 className="grid place-items-center place-center text-6xl pt-3 pb-0 mb-0"> About Stay Gold, Cowboy</h2>
      <div className="card card-compact w-128 bg-base-100 shadow-xl mt-10">
        <figure><Image src={menalex} alt="Angie and Alex at Musicians Corner" /></figure>
        <div className="card-body text-white">
          <p className="card-title">Photo by <a className="link" href="https://www.instagram.com/calvin_tigre/" target="_blank" rel="noopener noreferrer">Calvin Tigre</a></p>
          <p className="text-2xl font-semibold leading-normal text-gray-900 dark:text-white">Hi there.
            Stay Gold, Cowboy exists to honor the memory of the emosurrealist, activist, artist, creative connoisseur, prolific, polaroid taking Golden Hatted Cowboy, Sonatore aka Alex Cheng aka Alex Red.  Alex went under many a persona, mysterious, fluid, and still so distinct. He always talked about emosurrealism, and I intend to honor his memory by talking about it. Rest up, Alex. In every art museum bathroom stall, emosurrealism lives on!
          </p>
          <p className="text-l">♡<a className="link" href="https://github.com/AngieMGonzalez" target="_blank" rel="noopener noreferrer">A.M.G</a>♡</p>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import { signIn } from '../utils/auth';
import Hat from '../images/Hat.png';

function Signin() {
  return (
    <>
      <div
        className="text-center flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '200px',
          margin: '0 auto',
          zIndex: 1,
          minHeight: '25rem',
          width: '100%',
          minWidth: '30rem',
        }}
      >
        <h1 className="text-6xl">Hi there, Partner</h1>
        <p className="text-4xl">Are you a Fan of Sonatore?</p>
        <div className="py-2">
          <Button type="button" size="lg" className="copy-btn text-2xl" onClick={signIn}>
            Join to see Sonatore&apos;s Art
          </Button>
        </div>
        <p className="text-3xl">Don&apos;t forget to Stay Gold, Cowboy</p>
        <Image src={Hat} alt="Gold Hat" width={100} height={100} />
      </div>
    </>
  );
}

export default Signin;

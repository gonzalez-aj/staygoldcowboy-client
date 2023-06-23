import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
      }}
    >
      <h1 className="text-2xl">Hi there, Partner</h1>
      <p className="text-xl">Are you a Fan of Sonatore?</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Join to see Sonatore&apos;s Art
      </Button>
      <p className="text-xl">Don&apos;t forget to Stay Gold, Cowboy</p>
    </div>
  );
}

export default Signin;

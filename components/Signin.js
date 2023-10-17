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
      <h1>HH PIZZA & WINGS</h1>
      <Button type="button" className="copy-btn btn-secondary w-25 mx-auto mt-5" onClick={signIn}>
        Log In
      </Button>
    </div>
  );
}

export default Signin;

import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Rate() {
  const [review, setReview] = useState('');

  const handleClick = (resp) => {
    setReview(resp);
  };

  console.warn('Review', review);

  return (
    <>
      <p>How would you rate your service?</p>
      <div className="d-flex gap-3">
        <Button onClick={(() => handleClick('Poor'))}>Poor</Button>
        <Button onClick={(() => handleClick('OK'))}>OK</Button>
        <Button onClick={(() => handleClick('Good'))}>Good</Button>
        <Button onClick={(() => handleClick('Great'))}>Great</Button>
      </div>
    </>
  );
}

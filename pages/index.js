// import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { checkUser } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import HomeMenu from '../components/HomeMenu';

function Home() {
  const { user } = useAuth();
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    checkUser(user.uid).then((data) => setAuthUser(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      { authUser?.uid === user.uid ? (
        <div
          className="text-center d-flex flex-column justify-content-center align-content-center"
          style={{
            height: '90vh',
            padding: '30px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <h1>Hello, {user.fbUser.displayName}!</h1>
          <HomeMenu />
        </div>
      ) : (
        <div className="text-center mt-5">
          <h1 className="p-5">You are not authorized!</h1>
          <p>Please see management for access.</p>
        </div>
      )}
    </>
  );
}

export default Home;

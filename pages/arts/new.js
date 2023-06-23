import Head from 'next/head';
import ArtForm from '../../components/art/ArtForm';
import { useAuth } from '../../utils/context/authContext';

const NewArt = () => {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Submit Tag</title>
      </Head>
      <div>
        <ArtForm user={user} />
      </div>
    </>
  );
};

export default NewArt;

import Head from 'next/head';
import TagForm from '../../components/tags/TagForm';
import { useAuth } from '../../utils/context/authContext';

const NewTag = () => {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Submit Tag</title>
      </Head>
      <div>
        <div>
          <TagForm user={user} />
        </div>
      </div>
    </>
  );
};

export default NewTag;

import Head from 'next/head';
import TagForm from '../../components/tags/TagForm';
import { useAuth } from '../../utils/context/authContext';

const NewTag = () => {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Upload Art</title>
      </Head>
      <div>
        <br />
        <div>
          <p className="max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-white">Create New Tag</p>
          <br />
        </div>
        <div>
          <TagForm user={user} />
        </div>
      </div>
    </>
  );
};

export default NewTag;

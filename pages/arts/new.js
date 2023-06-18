import ArtForm from '../../components/art/ArtForm';
import { useAuth } from '../../utils/context/authContext';

const NewArt = () => {
  const { user } = useAuth();

  return (
    <>
      <div>
        <ArtForm user={user} />
      </div>
    </>
  );
};

export default NewArt;

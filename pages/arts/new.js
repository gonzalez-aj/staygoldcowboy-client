import ArtForm from '../../components/art/ArtForm';
import { useAuth } from '../../utils/context/authContext';

const NewArt = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Upload New Art</h1>
      <ArtForm user={user} />
    </div>
  );
};

export default NewArt;

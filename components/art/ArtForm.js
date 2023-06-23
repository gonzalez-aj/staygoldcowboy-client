import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createArt, updateArt } from '../../utils/data/artData';
import { getTags } from '../../utils/data/tagData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  title: '',
  imageUrl: '',
  creationDate: '',
  tagId: [],
};

const ArtForm = ({ artObj }) => {
  const [formInput, setFormInput] = useState(initialState);
  const [tags, setTags] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  const getAllTags = () => {
    getTags(id)
      .then((response) => setTags(response));
  };

  useEffect(() => {
    if (artObj.id) {
      setFormInput({
        id: artObj.id,
        title: artObj.title,
        imageUrl: artObj.image_url,
        creationDate: artObj.creation_date,
        tagId: artObj.tag.map((tag) => tag.id),
      });
    }
    getAllTags();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [artObj]);

  const handleInputChange = (e) => {
    const { name, value, options } = e.target;
    if (name === 'tagId') {
      const selectedTags = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => Number(option.value));

      setFormInput((prevState) => ({
        ...prevState,
        [name]: selectedTags,
      }));
    } else {
      setFormInput((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (artObj.id) {
      updateArt(formInput).then(() => router.push(`/arts/${artObj.id}`));
    } else {
      createArt(formInput, user.uid)
        .then((art) => {
          router.push(`/arts/${art.id}`);
        });
    }
  };

  return (
    <>
      <h2 className="max-w-lg text-5xl font-semibold leading-normal text-gray-900 dark:text-white">{artObj.id ? 'Update' : 'Upload'} Art</h2>
      <br />
      <Form onSubmit={handleSubmit}>
        <div className="mb-6 text-2xl">
          <div>
            <Form.Label htmlFor="title" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">Title</Form.Label>
            <input
              type="text"
              placeholder="title"
              className="input input-bordered input-info w-full max-w-s text-l"
              name="title"
              value={formInput.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <div>
            <Form.Label htmlFor="imageUrl" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">Image URL</Form.Label>
            <input
              type="text"
              placeholder="www.image.com"
              className="input input-bordered input-success w-full max-w-s text-l"
              name="imageUrl"
              value={formInput.imageUrl}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <div>
            <Form.Label htmlFor="creationDate" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">Created On:</Form.Label>
            <input
              type="date"
              name="creationDate"
              className="input input-bordered input-info w-full max-w-s"
              value={formInput.creationDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <br />
          <div>
            <Form.Label htmlFor="tag" className="block mb-2 text-l font-medium text-gray-900 dark:text-white">Tags:</Form.Label>
            <select
              multiple
              name="tagId"
              value={formInput.tagId}
              onChange={handleInputChange}
              style={{ height: '100px', width: '50%' }}
              required
            >
              <option value="">Select a Tag</option>
              {tags.map((tag) => (
                <option key={tag.id} value={tag.id}>{tag.medium}</option>
              ))}
            </select>
          </div>
        </div>
        <Button type="submit" variant="primary">{artObj.id ? 'Update' : 'Submit'}</Button>
      </Form>
    </>
  );
};

ArtForm.propTypes = {
  artObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image_url: PropTypes.string,
    creation_date: PropTypes.string,
    tag: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      medium: PropTypes.string,
    })),
  }),
};

ArtForm.defaultProps = {
  artObj: initialState,
};

export default ArtForm;

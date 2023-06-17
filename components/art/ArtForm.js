import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { createArt } from '../../utils/data/artData';
import getTags from '../../utils/data/tagData';

const initialState = {
  title: '',
  imageUrl: '',
  creationDate: '',
  tagId: [],
};

const ArtForm = ({ user }) => {
  const [formInput, setFormInput] = useState(initialState);
  const [tags, setTags] = useState([]);
  const router = useRouter();
  const { id } = router.query;

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
    createArt(formInput, user.uid)
      .then((art) => {
        router.push(`/arts/${art.id}`);
      });
  };

  const getAllTags = () => {
    getTags(id)
      .then((response) => setTags(response));
  };

  useEffect(() => { getAllTags(); },
    []);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="mb-6">
          <div>
            <Form.Label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</Form.Label>
            <input
              type="text"
              placeholder="title"
              className="input input-bordered input-info w-full max-w-s"
              name="title"
              value={formInput.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <div className="">Image URL</div>
            <FloatingLabel controlId="floatingInput1" className="mb-3">
              <Form.Control
                type="text"
                placeholder="www.image.com"
                name="imageUrl"
                value={formInput.imageUrl}
                onChange={handleInputChange}
                required
              />
            </FloatingLabel>
            <Form.Label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</Form.Label>
            <input
              type="text"
              placeholder="www.image.com"
              className="input input-bordered input-success w-full max-w-s"
              value={formInput.imageUrl}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Form.Label htmlFor="creationDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Created On:</Form.Label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-s"
              value={formInput.creationDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Form.Label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags:</Form.Label>
            <select
              multiple
              name="tagId"
              value={formInput.tagId}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a Tag</option>
              {tags.map((tag) => (
                <option key={tag.id} value={tag.id}>{tag.medium}</option>
              ))}
            </select>
          </div>
        </div>
        <Button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</Button>
      </Form>
    </>
  );
};

ArtForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArtForm;

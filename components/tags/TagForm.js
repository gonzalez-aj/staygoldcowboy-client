import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { createTag, updateTag } from '../../utils/data/tagData';

const initialState = {
  medium: '',
};

const TagForm = ({ tagObj }) => {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (tagObj.id) {
      setFormInput({
        id: tagObj.id,
        medium: tagObj.medium,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tagObj]);

  const handleInputChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tagObj.id) {
      updateTag(formInput).then(() => router.push('/tags'));
    } else {
      createTag(formInput).then((tag) => {
        if (tag) {
          router.push('/tags');
        }
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Form.Label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Medium
          </Form.Label>
          <input
            className="input input-bordered input-info w-full max-w-s"
            type="text"
            placeholder="Enter medium"
            name="medium"
            value={formInput.medium}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </>
  );
};

TagForm.propTypes = {
  tagObj: PropTypes.shape({
    id: PropTypes.number,
    medium: PropTypes.string,
  }),
};

TagForm.defaultProps = {
  tagObj: initialState,
};

export default TagForm;

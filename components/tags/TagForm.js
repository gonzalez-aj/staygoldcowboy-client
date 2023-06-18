import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createTag } from '../../utils/data/tagData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  medium: '',
};

const TagForm = () => {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  const handleInputChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTag(formInput).then((response) => {
      if (response) {
        router.push('/tags');
      }
    });
  };

  useEffect(() => {
    if (!user?.uid) {
      router.push('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default TagForm;

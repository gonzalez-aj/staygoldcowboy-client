import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
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
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-6">
          <Form.Label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Medium
          </Form.Label>
          <InputGroup
            className="input input-bordered input-info w-full max-w-s"
            type="text"
            placeholder="Enter medium"
            name="medium"
            value={formInput.medium}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </>
  );
};

export default TagForm;

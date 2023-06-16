// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { createArt, getArtByTag } from '../../utils/data/artData';

// const initialState = {
//   title: '',
//   imageUrl: '',
//   creationDate: '',
//   description: '',
//   tagId: [],
// };

// const ArtForm = ({ user }) => {
//   const [formInput, setFormInput] = useState(initialState);
//   const [tags, setTags] = useState([]);
//   const router = useRouter();
//   const { id } = router.query;

//   const handleInputChange = (e) => {
//     setFormInput((prevState) => ({
//       ...prevState,
//       [e.target.name]:
//         e.target.name === 'tagId'
//           ? [Number(e.target.value)]
//           : e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createArt(formInput, user.uid)
//       .then((art) => {
//         router.push(`/arts/${art.id}`);
//       });
//   };

//   const getTags = () => {
//     getArtByTag(id)
//       .then((response) => setTags(response));
//   };

//   useEffect(() => { getTags(); },
//     []);

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="title">
//           <Form.Label>Title</Form.Label>
//           <Form.Control
//             name="title"
//             type="text"
//             placeholder="Enter Title"
//             value={formInput.title}
//             onChange={handleInputChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="imageUrl">
//           <Form.Label>Image URL</Form.Label>
//           <Form.Control
//             name="imageUrl"
//             type="text"
//             placeholder="Enter Image URL"
//             value={formInput.imageUrl}
//             onChange={handleInputChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="creationDate">
//           <Form.Label>Creation Date</Form.Label>
//           <Form.Control
//             name="creationDate"
//             type="date"
//             placeholder="Enter Creation Date"
//             value={formInput.creationDate}
//             onChange={handleInputChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="description">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             name="description"
//             type="text"
//             placeholder="Enter Description"
//             value={formInput.description}
//             onChange={handleInputChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="tagId">
//           <Form.Label>Tag</Form.Label>
//           <Form.Control
//             name="tagId"
//             as="select"
//             value={formInput.tagId}
//             onChange={handleInputChange}
//             required
//           >
//             <option value="">Select a Tag</option>
//             {tags.map((tag) => (
//               <option key={tag.id} value={tag.id}>{tag.medium}</option>
//             ))}
//           </Form.Control>
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// ArtForm.propTypes = {
//   user: PropTypes.shape({
//     uid: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default ArtForm;

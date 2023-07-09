// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';

// // import { CREATE_ITEM } from '../../utils/mutations';

// import { CREATE_ITEM } from './mutations';
// import { Link } from 'react-router-dom';


// const AddItemForm = ({ ownerId }) => {
//   const [itemData, setItemData] = useState({
//     desc: '',
//     imagePath: '',
//     value: 0,
//     donate: false,
//     yearMade: 0,
//     model: '',
//     serial: '',
//     categoryIds: [],
//     tradeForIds: [],
//   });

//   // const [createItem, { loading, error }] = useMutation(CREATE_ITEM);

//   // const handleChange = (e) => {
//   //   setItemData({
//   //     ...itemData,
//   //     [e.target.name]: e.target.value,
//   //   });
//   // };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createItem({
//       variables: {
//         ownerId,
//         ...itemData,
//       },
//     })
//       .then((response) => {
//         console.log('Item created:', response.data.createItem);
//       })
//       .catch((error) => {
//         console.error('Error creating item:', error);
//       });
//   };

//   if (loading) return <p>Creating item...</p>;
//   if (error) return <p>Error creating item: {error.message}</p>;

//   return (
//     <div>
//       <h2>Add Item</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Description:
//           <input
//             type="text"
//             name="desc"
//             value={itemData.desc}
//             // onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Add Item</button>
//       </form>

//       <Link to="/account">
//         <button>Go Back to Account</button>
//       </Link>
//     </div>
//   );
// };

// export default AddItemForm;
